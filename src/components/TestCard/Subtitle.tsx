import React from 'react';

export interface SubtitleProps {
  className?: string;
  style?: React.CSSProperties;
  subtitle?: string;
}

export const Subtitle = ({ subtitle, className, style }: SubtitleProps) => (
<span data-fl-id="I61:306;49:12093" style={{ alignSelf: 'stretch', height: '24px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-caption-caption-1-size, 10px)', fontWeight: 'var(--font-caption-caption-1-weight, 400)', fontFamily: 'var(--font-caption-caption-1-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-secondary, #868d94)', textAlign: 'left', lineHeight: 'var(--font-caption-caption-1-line-height, 12px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', whiteSpace: 'pre-wrap', ...style }} className={className}>{subtitle ?? "Dynamic microphone, Speaker microphone"}</span>
);
