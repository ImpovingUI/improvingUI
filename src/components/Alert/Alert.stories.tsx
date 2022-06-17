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
     show : true,
     variant: 'success',
     filled:true,
     closeAutomatic: true,
     timeOut: 3000,
     message: 'Hola desde alerta',
     tittle: '',
     position:'right'
  };