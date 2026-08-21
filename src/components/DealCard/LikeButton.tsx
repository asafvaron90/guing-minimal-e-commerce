import React from 'react';
import { MuiIconButton, MuiBox } from '../adapters/mui-v7/internal';
import type { LikeButtonSize } from './DealCard';
import type { LikeButtonState } from './DealCard';
import { FIGMA_ICON_HEART_14PX_IMAGE_5_SVG, FIGMA_HEART_FILLED_1_SVG, FIGMA_ICON_HEART_14PX_SIZE_SMALL_STATE_UNLIKED_SVG, FIGMA_ICON_HEART_14PX_SIZE_SMALL_STATE_LIKED_SVG, FIGMA_ICON_HEART_14PX_SIZE_LARGE_STATE_UNLIKED_SVG, FIGMA_ICON_HEART_14PX_SIZE_LARGE_STATE_LIKED_SVG } from './DealCard.assets';

export interface LikeButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: LikeButtonSize;
  state?: LikeButtonState;
  changeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  unlikedIcon?: React.ReactNode;
  likedIcon?: React.ReactNode;
  onClick?: () => void;
  onLikeToggle?: (nextState: LikeButtonState) => void;
}

export const LikeButton = ({ className, style, size, state, changeIcon, icon, unlikedIcon, likedIcon, onLikeToggle, onClick }: LikeButtonProps) => (
<MuiIconButton data-fl-id="I61:306;49:12094" onClick={(event) => { event.stopPropagation(); (() => onLikeToggle?.((state ?? "liked") === "unliked" ? "liked" : "unliked"))(); onClick?.(); }} sx={{ minWidth: 0, padding: 0, boxShadow: 'none',  position: 'absolute', left: '297px', top: '8px', width: size == null ? '30px' : (size === "small" ? "30px" : (size === "large" ? "40px" : ('30px'))), height: size == null ? '30px' : (size === "small" ? "30px" : (size === "large" ? "40px" : ('30px'))), display: 'flex', flexDirection: 'row', direction: 'ltr', justifyContent: 'flex-start', alignItems: 'flex-start', gap: size == null ? 'var(--gap-space-s, 8px)' : (size === "small" ? "8px" : (size === "large" ? "8px" : ('var(--gap-space-s, 8px)'))), paddingTop: size == null ? 'var(--gap-space-s, 8px)' : (size === "small" ? "8px" : (size === "large" ? "8px" : ('var(--gap-space-s, 8px)'))), paddingBottom: size == null ? 'var(--gap-space-s, 8px)' : (size === "small" ? "8px" : (size === "large" ? "8px" : ('var(--gap-space-s, 8px)'))), paddingLeft: size == null ? 'var(--gap-space-10, 10px)' : (size === "small" ? "10px" : (size === "large" ? "10px" : ('var(--gap-space-10, 10px)'))), boxSizing: 'border-box', background: 'var(--color-background-primary, #ffffff)', borderRadius: size == null ? 'var(--radius-radius-23, 23px)' : (size === "small" ? "23px" : (size === "large" ? "23px" : ('var(--radius-radius-23, 23px)'))), ...style }} className={className}>
    {size == null && state == null && changeIcon == null && icon == null && unlikedIcon == null && likedIcon == null ? (<MuiBox data-fl-id="I61:306;49:12094;61:4931" style={{ position: 'relative', width: '14px', flexShrink: 0, height: '14px', boxSizing: 'border-box', overflow: 'hidden', borderRadius: '0px 0px 0px 0px' }}>
    <MuiBox data-fl-id="I61:306;49:12094;61:4931;61:4927" style={{ position: 'absolute', left: '0px', top: '0px', width: '14px', height: '14px', boxSizing: 'border-box', lineHeight: 0, fontSize: 0 }} dangerouslySetInnerHTML={{ __html: FIGMA_ICON_HEART_14PX_IMAGE_5_SVG }} />
    <MuiBox data-fl-id="I61:306;49:12094;61:4931;61:4928" style={{ position: 'absolute', left: '0px', top: '0px', width: '13.5px', height: '13.5px', boxSizing: 'border-box', lineHeight: 0, fontSize: 0 }} dangerouslySetInnerHTML={{ __html: FIGMA_HEART_FILLED_1_SVG }} />
  </MuiBox>) : (() => { const __icon = (state ?? "liked") === "unliked" ? unlikedIcon ?? (changeIcon ?? icon) : ((state ?? "liked") === "liked" ? likedIcon ?? (changeIcon ?? icon) : (changeIcon ?? icon)); return (<span data-fl-id="I61:306;49:12094;61:4931" aria-hidden="true" style={{ display: 'contents' }} {...(__icon == null ? { dangerouslySetInnerHTML: { __html: (size ?? "small") === "small" && (state ?? "liked") === "unliked" ? FIGMA_ICON_HEART_14PX_SIZE_SMALL_STATE_UNLIKED_SVG : ((size ?? "small") === "small" && (state ?? "liked") === "liked" ? FIGMA_ICON_HEART_14PX_SIZE_SMALL_STATE_LIKED_SVG : ((size ?? "small") === "large" && (state ?? "liked") === "unliked" ? FIGMA_ICON_HEART_14PX_SIZE_LARGE_STATE_UNLIKED_SVG : ((size ?? "small") === "large" && (state ?? "liked") === "liked" ? FIGMA_ICON_HEART_14PX_SIZE_LARGE_STATE_LIKED_SVG : (FIGMA_ICON_HEART_14PX_SIZE_SMALL_STATE_UNLIKED_SVG)))) } } : {})}>{__icon}</span>); })()}
  </MuiIconButton>
);
