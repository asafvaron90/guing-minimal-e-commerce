import React from 'react';
import { MuiBox } from '../adapters/mui-v7/internal';
import { PriceTag } from './PriceTag';
import { FavouriteButton } from './FavouriteButton';
import { ProductImage } from './ProductImage';


export type FavouriteButtonSize = "small" | "large";

export interface FavouriteButtonConfig {
  size?: FavouriteButtonSize;
  state?: FavouriteButtonState;
  changeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  unlikedIcon?: React.ReactNode;
  likedIcon?: React.ReactNode;
  onClick?: () => void;
}

export type FavouriteButtonState = "unliked" | "liked";

export type TesttCarddSale = "yes" | "no";

export type TesttCarddFormat = "vertical" | "horizontal";

export interface TesttCarddProps {
  className?: string;
  style?: React.CSSProperties;
  favouriteButton?: FavouriteButtonConfig;
  image?: React.ReactNode;
  sale?: TesttCarddSale;
  format?: TesttCarddFormat;
  oldPrice?: string;
  subtitle?: string;
  productName?: string;
  category?: string;
  onClick?: () => void;
  onLikeToggle?: (nextState: FavouriteButtonState) => void;
}

// Integrated: the Deterministic visual with Material UI components promoted in and interactions wired.
// Generated — do not edit; change the Figma design or the pipeline instead.
export const TesttCardd = ({ className, style, favouriteButton, image, sale, format, oldPrice, subtitle, productName, category, onClick, onLikeToggle }: TesttCarddProps) => (
  <MuiBox data-figma-component data-fl-id="61:306" onClick={() => onClick?.()} className={className} style={{ position: 'relative', overflow: 'visible', width: sale == null && format == null ? '335px' : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "vertical" ? "160px" : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "horizontal" ? "335px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "horizontal" ? "335px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "vertical" ? "160px" : ('335px'))))), height: sale == null && format == null ? '170px' : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "vertical" ? "226px" : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "horizontal" ? "170px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "horizontal" ? "170px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "vertical" ? "226px" : ('170px'))))), display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'center', gap: 'var(--gap-space-s, 8px)', boxSizing: 'border-box', background: 'var(--color-background-secondary, #f5f5f5)', borderRadius: sale == null && format == null ? 'var(--radius-radius-2xl, 24px)' : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "vertical" ? "0px" : ((sale ?? "yes") === "yes" && (format ?? "horizontal") === "horizontal" ? "24px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "horizontal" ? "24px" : ((sale ?? "yes") === "no" && (format ?? "horizontal") === "vertical" ? "0px" : ('var(--radius-radius-2xl, 24px)'))))), ...style }}>
    <ProductImage image={image}/>
    <FavouriteButton size={favouriteButton?.size} state={favouriteButton?.state} changeIcon={favouriteButton?.changeIcon} icon={favouriteButton?.icon} unlikedIcon={favouriteButton?.unlikedIcon} likedIcon={favouriteButton?.likedIcon} onClick={favouriteButton?.onClick} onLikeToggle={onLikeToggle}/>
    <MuiBox data-fl-id="I61:306;49:12087" style={{ position: 'relative', flexGrow: 1, flexBasis: 0, minWidth: 0, height: '88px', display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'center', alignItems: 'flex-start', gap: 'var(--gap-space-m, 12px)', paddingRight: 'var(--gap-space-l, 16px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <span data-fl-id="I61:306;49:12149" style={{ alignSelf: 'stretch', height: '12px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-caption-caption-2-size, 10px)', fontWeight: 'var(--font-caption-caption-2-weight, 600)', fontFamily: 'var(--font-caption-caption-2-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-secondary, #868d94)', textAlign: 'left', lineHeight: '12px', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', whiteSpace: 'pre-wrap' }}>{category ?? "Microphones"}</span>
    <MuiBox data-fl-id="I61:306;49:12150" style={{ position: 'relative', alignSelf: 'stretch', height: '60px', flexShrink: 0, display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 'var(--gap-space-xs, 4px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <MuiBox data-fl-id="I61:306;49:12088" style={{ position: 'relative', width: '110px', height: '14px', flexShrink: 0, display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'center', gap: 'var(--gap-space-xs, 4px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <PriceTag />
    <span data-fl-id="I61:306;49:12090" style={{ width: '47px', flexShrink: 0, height: '14px', boxSizing: 'border-box', fontSize: 'var(--font-body-body-2-striketrouhjt-size, 12px)', fontWeight: 'var(--font-body-body-2-striketrouhjt-weight, 400)', fontFamily: 'var(--font-body-body-2-striketrouhjt-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-tertiary, #b0b5b9)', textAlign: 'left', lineHeight: 'var(--font-body-body-2-striketrouhjt-line-height, 14px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'line-through', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre' }}>{oldPrice ?? "$199.99"}</span>
  </MuiBox>
    <MuiBox data-fl-id="I61:306;49:12091" style={{ position: 'relative', alignSelf: 'stretch', height: '42px', flexShrink: 0, display: 'flex', flexDirection: 'column', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 'var(--gap-space-xxs, 2px)', boxSizing: 'border-box', borderRadius: '0px 0px 0px 0px' }}>
    <span data-fl-id="I61:306;49:12092" style={{ alignSelf: 'stretch', height: '16px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-heading-heading-3-medium-size, 14px)', fontWeight: 'var(--font-heading-heading-3-medium-weight, 500)', fontFamily: 'var(--font-heading-heading-3-medium-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-primary, #212429)', textAlign: 'left', lineHeight: 'var(--font-heading-heading-3-medium-line-height, 16px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', whiteSpace: 'pre-wrap' }}>{productName ?? "RØDE PodMic"}</span>
    <span data-fl-id="I61:306;49:12093" style={{ alignSelf: 'stretch', height: '24px', flexShrink: 0, boxSizing: 'border-box', fontSize: 'var(--font-caption-caption-1-size, 10px)', fontWeight: 'var(--font-caption-caption-1-weight, 400)', fontFamily: 'var(--font-caption-caption-1-family, Inter)', fontStyle: 'normal', color: 'var(--color-content-secondary, #868d94)', textAlign: 'left', lineHeight: 'var(--font-caption-caption-1-line-height, 12px)', letterSpacing: '0em', textTransform: 'none', textDecoration: 'none', direction: 'ltr', unicodeBidi: 'plaintext', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', whiteSpace: 'pre-wrap' }}>{subtitle ?? "Dynamic microphone, Speaker microphone"}</span>
  </MuiBox>
  </MuiBox>
  </MuiBox>
  </MuiBox>
);

export default TesttCardd;
