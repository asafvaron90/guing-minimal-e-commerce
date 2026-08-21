import type { Meta, StoryObj } from '@storybook/react';
import { DealCard } from './DealCard';
import referencePng from './DealCard.reference.png';
import pixelReportHtml from './DealCard.PIXEL_REVIEW.html?raw';
import integratedPixelReportHtml from './DealCardIntegrated.PIXEL_REVIEW.html?raw';
import { withFigmaReference } from '../../storybook/withFigmaReference';
import { DealCard_Deterministic } from './DealCard_Deterministic';

const meta = {
  decorators: [withFigmaReference(referencePng, {"score":33.4,"perceptualScore":99.47190517998244,"wholeFrameExactScore":63.43459174714662,"worstHotspotScore":33.40715804394047,"targetScore":95,"isReview":true,"measurementStatus":"measured","pixelExact":false,"createdAt":"2026-08-21T19:10:33.829Z"}, pixelReportHtml)],
  title: 'Components/DealCard',
  component: DealCard,
  argTypes: { onClick: { action: 'onClick' }, onLikeToggle: { action: 'onLikeToggle' } },
} satisfies Meta<typeof DealCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integrated: Story = { parameters: { reviewScore: {"score":63.4,"isReview":true,"banner":"⚠️ Integrated · Material UI — informational, needs alignment (63.4/100)","adapterId":"mui-v7.3.11","adapterName":"Material UI","reportHtml":integratedPixelReportHtml} }, name: 'Integrated · Material UI' };

export const Deterministic: Story = { render: (args) => <DealCard_Deterministic {...args} /> };


