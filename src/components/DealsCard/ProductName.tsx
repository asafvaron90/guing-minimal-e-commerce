import React from 'react';

export interface ProductNameProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductName = ({ className, style }: ProductNameProps) => (
<span data-fl-id="I61:306;49:12092" style={{ alignSelf: 'stretch', height: '16px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-heading-heading-3-medium-size, 14px)', fontWeight: 'var(--font-heading-heading-3-medium-weight, 500)', fontFamily: 'var(--font-heading-heading-3-medium-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-primary, #212429)', textAlign: 'left', lineHeight: 'var(--font-heading-heading-3-medium-line-height, 16px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre-wrap', ...style }} className={className}>{"RØDE PodMic"}</span>
);
