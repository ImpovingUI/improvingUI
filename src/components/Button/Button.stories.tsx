import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    color: {options:['primary', 'secondary','success','warning','danger'], control: {type: 'radio'} },
    size: {options:['small', 'medium','large'], control: {type: 'radio'} },
    variant: {options:['contained', 'outlined', 'text'], control: {type: 'radio'} },
    onClick: {action: 'clicked'},
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const DefaultButton = Template.bind({});
  DefaultButton.args = {
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    label:'label',
    iconLeft: '',
    iconRight: '',
  };
 
  export const Outlined = Template.bind({});
  Outlined.args = {
    color: 'primary',
    size: 'medium',
    variant: 'outlined',
    label:'label',
    iconLeft: '',
    iconRight: '',
  };

  export const Text = Template.bind({});
  Text.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    iconLeft: '',
    iconRight: '',
  };

  export const LeftIcon = Template.bind({});
  LeftIcon.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    iconLeft: '♥',
    iconRight: '',
  };

  export const RightIcon = Template.bind({});
  RightIcon.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    iconLeft: '',
    iconRight: '♥',
  };
