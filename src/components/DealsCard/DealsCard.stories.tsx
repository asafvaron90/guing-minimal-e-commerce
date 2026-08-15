import type { Meta, StoryObj } from '@storybook/react';
import { DealsCard } from './DealsCard';
import referencePng from './DealsCard.reference.png';
import pixelReportHtml from './DealsCard.PIXEL_REVIEW.html?raw';
import integratedPixelReportHtml from './DealsCardIntegrated.PIXEL_REVIEW.html?raw';
import { withFigmaReference } from '../../storybook/withFigmaReference';
import { DealsCard_Deterministic } from './DealsCard_Deterministic';

const meta = {
  decorators: [withFigmaReference(referencePng, {"score":33.4,"perceptualScore":99.47190517998244,"wholeFrameExactScore":63.43459174714662,"worstHotspotScore":33.40715804394047,"targetScore":95,"isReview":true,"measurementStatus":"measured","pixelExact":false,"createdAt":"2026-08-15T00:29:51.187Z"}, pixelReportHtml)],
  title: 'Components/DealsCard',
  component: DealsCard,
  argTypes: { onClick: { action: 'onClick' } },
} satisfies Meta<typeof DealsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integrated: Story = { parameters: { reviewScore: {"score":63.4,"isReview":true,"banner":"⚠️ Integrated · Material UI — informational, needs alignment (63.4/100)","adapterId":"mui-v7.3.11","adapterName":"Material UI","reportHtml":integratedPixelReportHtml} }, name: 'Integrated · Material UI' };

export const Deterministic: Story = { render: (args) => <DealsCard_Deterministic {...args} /> };


