import React from 'react';
import { Button } from './index';
import { StoryType } from '../../stories/constants';
import { iconArg, iconComponents } from '../../stories/args';
import { Story } from '@storybook/react';
import { IButtonProps } from './interface';
import { orange } from '../../colors';

const COMPONENT_NAME = 'Button';
const BUTTON_TEXT = 'Default Button';

const TITLE = `${StoryType.BaseComponent}/${COMPONENT_NAME}/Base Button`;

export default {
  component: Button,
  title: TITLE,
  argTypes: {
    prefixIcon: iconArg,
    suffixIcon: iconArg,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/VjmhroWol6uCMqhDcJVrxV/LightMode?node-id=247%3A0',
    },
  },
  args: {
    children: BUTTON_TEXT,
  },
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: 'primary',
};

export const DefaultButton = Template.bind({});

export const JellyButton = Template.bind({});
JellyButton.args = {
  variant: 'jelly',
};

export const RoundShape = Template.bind({});
RoundShape.args = {
  shape: 'round',
  color: 'primary',
};

export const SmallSizeButton = Template.bind({});
SmallSizeButton.args = {
  size: 'small',
  color: 'primary',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  color: 'primary',
};

export const PrefixIconButton = Template.bind({});
PrefixIconButton.args = {
  color: 'primary',
  variant: 'fill',
  prefixIcon: iconComponents.WebOutlined,
};

export const SuffixIconButton = Template.bind({});
SuffixIconButton.args = {
  color: 'primary',
  variant: 'fill',
  suffixIcon: iconComponents.WebOutlined,
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  color: 'primary',
  variant: 'fill',
  block: true,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  color: 'primary',
  variant: 'fill',
  loading: true,
};

export const PaletteCustomColor = Template.bind({});
PaletteCustomColor.args = {
  color: orange[500],
};

export const SupportFormSubmit = () => (
  <form
    onSubmit={() => {
      alert('Trigger form submit');
    }}
  >
    <Button htmlType="submit">Submit</Button>
  </form>
);
