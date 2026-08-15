import React from 'react';

export interface OldPriceProps {
  className?: string;
  style?: React.CSSProperties;
}

export const OldPrice = ({ className, style }: OldPriceProps) => (
<span data-fl-id="I61:306;49:12090" style={{ width: '47px', flexShrink: 0, height: '14px', boxSizing: 'border-box', fontSize: 'var(--font-body-body-2-striketrouhjt-size, 12px)', fontWeight: 'var(--font-body-body-2-striketrouhjt-weight, 400)', fontFamily: 'var(--font-body-body-2-striketrouhjt-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-tertiary, #b0b5b9)', textAlign: 'left', lineHeight: 'var(--font-body-body-2-striketrouhjt-line-height, 14px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'line-through', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre', ...style }} className={className}>{"$199.99"}</span>
);
