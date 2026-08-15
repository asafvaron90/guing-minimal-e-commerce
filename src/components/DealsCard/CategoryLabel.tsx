import React from 'react';

export interface CategoryLabelProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

export const CategoryLabel = ({ text, className, style }: CategoryLabelProps) => (
<span data-fl-id="I61:306;49:12149" style={{ alignSelf: 'stretch', height: '12px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-caption-caption-2-size, 10px)', fontWeight: 'var(--font-caption-caption-2-weight, 600)', fontFamily: 'var(--font-caption-caption-2-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-secondary, #868d94)', textAlign: 'left', lineHeight: '12px', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', whiteSpace: 'pre-wrap', ...style }} className={className}>{text ?? "Microphones"}</span>
);
