import type { Meta, StoryObj } from '@storybook/react';
import { TTT1 } from './TTT1';
import referencePng from './TTT1.reference.png';
import pixelReportHtml from './TTT1.PIXEL_REVIEW.html?raw';
import integratedPixelReportHtml from './TTT1Integrated.PIXEL_REVIEW.html?raw';
import { withFigmaReference } from '../../storybook/withFigmaReference';
import { TTT1_Deterministic } from './TTT1_Deterministic';

const meta = {
  decorators: [withFigmaReference(referencePng, {"score":33.4,"perceptualScore":99.47190517998244,"wholeFrameExactScore":63.43459174714662,"worstHotspotScore":33.40715804394047,"targetScore":95,"isReview":true,"measurementStatus":"measured","pixelExact":false,"createdAt":"2026-08-22T07:16:40.966Z"}, pixelReportHtml)],
  title: 'Components/TTT1',
  component: TTT1,
  argTypes: { onClick: { action: 'onClick' }, onLikeToggle: { action: 'onLikeToggle' } },
} satisfies Meta<typeof TTT1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integrated: Story = { parameters: { reviewScore: {"score":63.4,"isReview":true,"banner":"⚠️ Integrated · Material UI — informational, needs alignment (63.4/100)","adapterId":"mui-v7.3.11","adapterName":"Material UI","reportHtml":integratedPixelReportHtml} }, name: 'Integrated · Material UI' };

export const Deterministic: Story = { render: (args) => <TTT1_Deterministic {...args} /> };


