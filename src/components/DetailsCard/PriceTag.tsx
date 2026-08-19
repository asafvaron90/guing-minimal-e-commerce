import React from 'react';

export interface PriceTagProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PriceTag = ({ className, style }: PriceTagProps) => (
<div data-fl-id="I61:306;49:12088" style={{ position: 'relative', width: '110px', height: '14px', flexShrink: 0, display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'center', gap: 'var(--gap-space-xs, 4px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px', ...style }} className={className}>
    <span data-fl-id="I61:306;49:12089" style={{ width: '59px', flexShrink: 0, height: '14px', boxSizing: 'border-box', fontSize: 'var(--font-heading-heading-3-extrabold-size, 14px)', fontWeight: 'var(--font-heading-heading-3-extrabold-weight, 800)', fontFamily: 'var(--font-heading-heading-3-extrabold-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-sale, #fa254c)', textAlign: 'left', lineHeight: 'var(--font-heading-heading-3-extrabold-line-height, 14px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre' }}>{"$108.20"}</span>
    <span data-fl-id="I61:306;49:12090" style={{ width: '47px', flexShrink: 0, height: '14px', boxSizing: 'border-box', fontSize: 'var(--font-body-body-2-striketrouhjt-size, 12px)', fontWeight: 'var(--font-body-body-2-striketrouhjt-weight, 400)', fontFamily: 'var(--font-body-body-2-striketrouhjt-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-tertiary, #b0b5b9)', textAlign: 'left', lineHeight: 'var(--font-body-body-2-striketrouhjt-line-height, 14px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'line-through', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre' }}>{"$199.99"}</span>
  </div>
);
