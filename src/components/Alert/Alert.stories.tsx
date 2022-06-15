import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import {Alert}  from './Alert';

export default{
    title: 'ReactComponentLibrary/Alert',
    component: Alert,
    
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
  DefaultAlert.args = {
    color: 'secondary',
    size: 'medium',
    variant: 'contained',
    label:'label',
    fullWidth:false,
    disabled:false,
    iconLeft: '',
    iconRight: '',
  };