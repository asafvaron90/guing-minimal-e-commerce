import React from 'react';
import { MuiBox } from '../adapters/mui-v7/internal';
import { FIGMA_IMAGE_CONTAINER_IMAGE_14_SVG } from './TTT1.assets';

export interface ProductImageProps {
  className?: string;
  style?: React.CSSProperties;
  image?: React.ReactNode;
}

export const ProductImage = ({ image, className, style }: ProductImageProps) => (
<MuiBox data-fl-id="I61:306;49:12086" style={{ position: 'relative', width: '160px', flexShrink: 0, height: '170px', boxSizing: 'border-box', overflow: 'hidden', background: 'var(--color-background-secondary, #f5f5f5)', borderRadius: 'var(--radius-radius-2xl, 24px)', ...style }} className={className}>
    <MuiBox data-fl-id="I61:306;49:12086;2:65" style={{ position: 'absolute', left: '-9px', top: '38px', width: '178px', height: '134px', boxSizing: 'border-box', lineHeight: 0, fontSize: 0 }} {...(image == null ? { dangerouslySetInnerHTML: { __html: FIGMA_IMAGE_CONTAINER_IMAGE_14_SVG } } : {})} >{image}</MuiBox>
  </MuiBox>
);
