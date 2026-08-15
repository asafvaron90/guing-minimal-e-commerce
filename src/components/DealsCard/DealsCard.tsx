import React from 'react';
import { CurrentPrice } from './CurrentPrice';
import { OldPrice } from './OldPrice';
import { ProductName } from './ProductName';
import { CategoryLabel } from './CategoryLabel';
import { ProductSubtitle } from './ProductSubtitle';
import { FavoriteButton } from './FavoriteButton';
import { ProductImage } from './ProductImage';


export interface FavoriteButtonConfig {
  onToggle?: () => void;
}

export interface DealsCardProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  subtitle?: string;
  onClick?: () => void;
  favoriteButton?: FavoriteButtonConfig;
}

// Integrated: the Deterministic visual with Material UI components promoted in and interactions wired.
// Generated — do not edit; change the Figma design or the pipeline instead.
export const DealsCard = ({ className, style, text, subtitle, onClick, favoriteButton }: DealsCardProps) => (
  <div data-figma-component data-fl-id="61:306" onClick={() => onClick?.()} className={className} style={{ position: 'relative', overflow: 'visible', width: '335px', height: '170px', display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'center', gap: 'var(--gap-space-s, 8px)', boxSizing: 'border-box', background: 'var(--color-background-secondary, #f5f5f5)', borderRadius: 'var(--radius-radius-2xl, 24px)', ...style }}>
    <ProductImage />
    <FavoriteButton onToggle={favoriteButton?.onToggle}/>
    <div data-fl-id="I61:306;49:12087" style={{ position: 'relative', flexGrow: 1, flexBasis: 0, minWidth: 0, height: '88px', display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'center', alignItems: 'flex-start', gap: 'var(--gap-space-m, 12px)', paddingRight: 'var(--gap-space-l, 16px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <CategoryLabel text={text}/>
    <div data-fl-id="I61:306;49:12150" style={{ position: 'relative', alignSelf: 'stretch', height: '60px', flexShrink: 0, display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 'var(--gap-space-xs, 4px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <div data-fl-id="I61:306;49:12088" style={{ position: 'relative', width: '110px', height: '14px', flexShrink: 0, display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'center', gap: 'var(--gap-space-xs, 4px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <CurrentPrice />
    <OldPrice />
  </div>
    <div data-fl-id="I61:306;49:12091" style={{ position: 'relative', alignSelf: 'stretch', height: '42px', flexShrink: 0, display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 'var(--gap-space-xxs, 2px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <ProductName />
    <ProductSubtitle subtitle={subtitle}/>
  </div>
  </div>
  </div>
  </div>
);

export default DealsCard;
