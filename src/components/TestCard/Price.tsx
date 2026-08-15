import React from 'react';

export interface PriceProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Price = ({ className, style }: PriceProps) => (
<span data-fl-id="I61:306;49:12089" style={{ width: '59px', flexShrink: 0, height: '14px', boxSizing: 'border-box', fontSize: 'var(--font-heading-heading-3-extrabold-size, 14px)', fontWeight: 'var(--font-heading-heading-3-extrabold-weight, 800)', fontFamily: 'var(--font-heading-heading-3-extrabold-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-sale, #fa254c)', textAlign: 'left', lineHeight: 'var(--font-heading-heading-3-extrabold-line-height, 14px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre', ...style }} className={className}>{"$108.20"}</span>
);
