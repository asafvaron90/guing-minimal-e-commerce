import type { Decorator } from '@storybook/react';

/**
 * Storybook decorator that renders the implemented component side-by-side
 * with its Figma reference image so designers can visually QA implementation
 * fidelity without leaving Storybook.
 *
 * Usage in a component's stories file:
 *
 *   import referencePng from './MyComponent.reference.png';
 *   import { withFigmaReference } from '../../storybook/withFigmaReference';
 *
 *   const meta = {
 *     title: 'Components/MyComponent',
 *     component: MyComponent,
 *     decorators: [withFigmaReference(referencePng)],
 *   } satisfies Meta<typeof MyComponent>;
 *
 * The reference PNG is exported from the canonical Figma variant at sync time
 * and committed next to the component source as `{ComponentName}.reference.png`.
 * This is the exact image the LLM saw when generating the component.
 * When no reference file exists the decorator is a no-op (the factory is simply
 * not called, so no import is added).
 */
/** Canonical visual-review contract shared by the final and render-harness Storybooks. */
export interface FigmaReviewScore {
  score?: number | null;
  perceptualScore?: number | null;
  wholeFrameExactScore?: number | null;
  worstHotspotScore?: number | null;
  targetScore?: number;
  isReview?: boolean;
  banner?: string;
  status?: string;
  reportUrl?: string;
  createdAt?: string;
  /** Explicit verifier state. Missing is supported for older generated stories. */
  measurementStatus?: 'measured' | 'unmeasured' | 'error';
  /** Exact RGBA equality. null means the comparison did not run. */
  pixelExact?: boolean | null;
  /** Per-story standalone pixel report HTML (e.g. the Integrated track's own
   *  report, referenced as a real `?raw` import in the generated story rather
   *  than a stringified value — see template-builder's injectFigmaReferenceDecorator).
   *  When set on a story's own `parameters.reviewScore`, it takes precedence over
   *  the meta-level 3rd `reportHtml` argument to `withFigmaReference` below. */
  reportHtml?: string;
}

function reviewNeedsAttention(review?: FigmaReviewScore): boolean {
  if (!review) return false;
  if (review.measurementStatus != null && review.measurementStatus !== 'measured') return true;
  if (review.targetScore != null) return review.isReview !== false;
  return review.isReview === true || review.pixelExact === false;
}

function VisualReviewBanner({ review, reportHtml }: { review: FigmaReviewScore; reportHtml?: string }) {
  const needsReview = reviewNeedsAttention(review);
  const perceptual = review.perceptualScore == null ? 'unmeasured' : `${review.perceptualScore}/100`;
  const createdAt = review.createdAt
    ? new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(review.createdAt))
    : null;
  const openReport = () => {
    if (!reportHtml) return;
    const reportUrl = URL.createObjectURL(new Blob([reportHtml], { type: 'text/html' }));
    window.open(reportUrl, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => URL.revokeObjectURL(reportUrl), 60_000);
  };

  return (
    <div
      data-visual-repair-banner
      style={{
        alignItems: 'center',
        background: needsReview ? '#FEF3C7' : '#DCFCE7',
        borderBottom: `1px solid ${needsReview ? '#F59E0B' : '#22C55E'}`,
        color: needsReview ? '#92400E' : '#166534',
        display: 'flex',
        flexWrap: 'wrap',
        font: '600 12px/1.4 system-ui, sans-serif',
        gap: 12,
        padding: '8px 16px',
      }}
    >
      <span>{review.banner ?? `${needsReview ? '⚠️ Needs Visual Review' : '✅ Visual target reached'} (Perceptual ${perceptual})`}</span>
      {createdAt && <span style={{ fontWeight: 500 }}>Created {createdAt}</span>}
      {review.reportUrl && (
        <a href={review.reportUrl} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
          View pixel report
        </a>
      )}
      {!review.reportUrl && reportHtml && (
        <button type="button" onClick={openReport} style={{ appearance: 'none', background: 'none', border: 0, color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0, textDecoration: 'underline' }}>
          View pixel report
        </button>
      )}
    </div>
  );
}

/** Banner-only decorator used by the temporary render harness on port 6007. */
export const withVisualRepairReport: Decorator = (Story, context) => {
  const review = context.parameters.visualRepairReport as FigmaReviewScore | undefined;
  if (!review) return <Story {...context} />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <VisualReviewBanner review={review} />
      <Story {...context} />
    </div>
  );
};

/**
 * @param imageUrl   Path/URL to the Figma reference PNG.
 * @param review     Optional pixel-diff score. When `score` is set, a small top-left badge always
 *   renders (green when passing, amber when `isReview`). When `isReview` is true and `banner` is
 *   set, a full-width amber warning strip is also rendered above the implementation panel.
 */
export const withFigmaReference = (imageUrl: string, review?: FigmaReviewScore, reportHtml?: string): Decorator => {
  const FigmaReferenceDecorator: Decorator = (Story, context) => {
    // A story can override the meta-level score (e.g. the FullMui track shows its own diff).
    const storyReview = context.parameters.reviewScore as FigmaReviewScore | undefined;
    const active: FigmaReviewScore | undefined = storyReview ?? review;
    // A story's own report (e.g. Integrated's) takes precedence over the
    // meta-level 3rd-arg report (Deterministic's) once a per-story reviewScore
    // is present; fall back to the meta-level report only when no per-story
    // reviewScore overrides the meta score at all.
    const activeReportHtml = storyReview ? storyReview.reportHtml : reportHtml;
    const hasScore = active?.score != null;
    const needsReview = reviewNeedsAttention(active);
    const showBanner = !!active && needsReview;
    const openReport = () => {
      if (!activeReportHtml) return;
      const reportUrl = URL.createObjectURL(new Blob([activeReportHtml], { type: 'text/html' }));
      window.open(reportUrl, '_blank', 'noopener,noreferrer');
      window.setTimeout(() => URL.revokeObjectURL(reportUrl), 60_000);
    };

    return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        fontFamily: 'sans-serif',
      }}
    >
      {showBanner && <VisualReviewBanner review={active!} reportHtml={activeReportHtml} />}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          alignItems: 'flex-start',
          padding: 24,
        }}
      >
        <div style={{ flex: '0 0 auto', position: 'relative' }}>
          {hasScore && !showBanner && (
            <div
              style={{
                position: 'absolute',
                top: 8,
                left: 8,
                zIndex: 1,
                fontSize: 11,
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: 4,
                background: needsReview ? '#FEF3C7' : '#DCFCE7',
                color: needsReview ? '#92400E' : '#166534',
              }}
            >
              {active!.score}/100
              {activeReportHtml && (
                <button
                  type="button"
                  onClick={openReport}
                  style={{ appearance: 'none', background: 'none', border: 0, color: 'inherit', cursor: 'pointer', font: 'inherit', marginLeft: 8, padding: 0, textDecoration: 'underline' }}
                >
                  View report
                </button>
              )}
            </div>
          )}
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#888',
              marginBottom: 10,
            }}
          >
            Implementation
          </div>
          <Story {...context} />
        </div>

        <div
          style={{
            flex: '0 0 auto',
            borderLeft: '1px solid #E5E7EB',
            paddingLeft: 32,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#888',
              marginBottom: 10,
            }}
          >
            Figma Reference
          </div>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Figma reference design"
              style={{
                display: 'block',
                maxWidth: 560,
                background: '#FAFAFA',
                padding: 16,
                borderRadius: 6,
                border: '1px solid #E5E7EB',
              }}
            />
          ) : (
            <div style={{ background: '#FEF2F2', border: '2px solid #DC2626', borderRadius: 6, color: '#991B1B', fontWeight: 600, padding: 16 }}>
              Figma reference image is missing. Pixel-perfect status cannot be verified.
            </div>
          )}
        </div>
      </div>
    </div>
    );
  };
  return FigmaReferenceDecorator;
};
