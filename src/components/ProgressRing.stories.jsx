import React from 'react';
import ProgressRing from './ProgressRing';

export default {
  title: 'Components/ProgressRing',
  component: ProgressRing,
  argTypes: {
    radius: { control: { type: 'number', min: 20, max: 200, step: 5 } },
    stroke: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    progress: { control: { type: 'number', min: 0, max: 100, step: 1 } },
    color: { control: 'color' },
  },
};

const Template = (args) => <ProgressRing {...args} />;

export const Default = Template.bind({});
Default.args = { radius: 60, stroke: 8, progress: 65, color: '#4ade80' };

export const LowProgress = Template.bind({});
LowProgress.args = { radius: 60, stroke: 8, progress: 25, color: '#facc15' };

export const HighProgress = Template.bind({});
HighProgress.args = { radius: 60, stroke: 8, progress: 90, color: '#3b82f6' };
