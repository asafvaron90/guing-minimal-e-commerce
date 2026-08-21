import type { Meta, StoryObj } from '@storybook/react';
import { TesttCardd } from './TesttCardd';
import referencePng from './TesttCardd.reference.png';
import pixelReportHtml from './TesttCardd.PIXEL_REVIEW.html?raw';
import integratedPixelReportHtml from './TesttCarddIntegrated.PIXEL_REVIEW.html?raw';
import { withFigmaReference } from '../../storybook/withFigmaReference';
import { TesttCardd_Deterministic } from './TesttCardd_Deterministic';

const meta = {
  decorators: [withFigmaReference(referencePng, {"score":33.4,"perceptualScore":99.47190517998244,"wholeFrameExactScore":63.43459174714662,"worstHotspotScore":33.40715804394047,"targetScore":95,"isReview":true,"measurementStatus":"measured","pixelExact":false,"createdAt":"2026-08-21T21:45:12.852Z"}, pixelReportHtml)],
  title: 'Components/TesttCardd',
  component: TesttCardd,
  argTypes: { onClick: { action: 'onClick' }, onLikeToggle: { action: 'onLikeToggle' } },
} satisfies Meta<typeof TesttCardd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integrated: Story = { parameters: { reviewScore: {"score":63.4,"isReview":true,"banner":"⚠️ Integrated · Material UI — informational, needs alignment (63.4/100)","adapterId":"mui-v7.3.11","adapterName":"Material UI","reportHtml":integratedPixelReportHtml} }, name: 'Integrated · Material UI' };

export const Deterministic: Story = { render: (args) => <TesttCardd_Deterministic {...args} /> };


