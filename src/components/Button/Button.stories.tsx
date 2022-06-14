import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import  {Button} from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    color: {options:['primary','secondary','dark','success','info','warning','danger'], control: {type: 'radio'} },
    size: {options:['small', 'medium','large'], control: {type: 'radio'} },
    variant: {options:['contained', 'outlined', 'text'], control: {type: 'radio'} },
    fullWidth: {options:[true, false], control: {type: 'radio'} },
    disabled: {options:[true, false], control: {type: 'radio'} },
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
    fullWidth:false,
    disabled:false,
    iconLeft: '',
    iconRight: '',
  };
 
  export const Outlined = Template.bind({});
  Outlined.args = {
    color: 'primary',
    size: 'medium',
    variant: 'outlined',
    label:'label',
    fullWidth:false,
    iconLeft: '',
    iconRight: '',
  };

  export const Text = Template.bind({});
  Text.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    fullWidth:false,
    iconLeft: '',
    iconRight: '',
  };

  export const LeftIcon = Template.bind({});
  LeftIcon.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    fullWidth:false,
    iconLeft: '♥',
    iconRight: '',
  };

  export const RightIcon = Template.bind({});
  RightIcon.args = {
    color: 'primary',
    size: 'medium',
    variant: 'text',
    label:'label',
    fullWidth:false,
    iconLeft: '',
    iconRight: '♥',
  };

  export const ClickExample = Template.bind({});
  ClickExample.play = async () => {
    await userEvent.click(screen.getByRole('button'));
  }
