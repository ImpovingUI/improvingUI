import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import  {Input} from './Input';


export default {
  title: 'ReactComponentLibrary/Input',
  component: Input,
  argTypes: {
    type: { options:['email','password','text'], control: {type: 'radio'} },
    variant: {options:['outlined', 'filled', 'underlined'], control: {type: 'radio'} },
    fullWidth: {options:[true, false], control: {type: 'radio'} },
    disabled: {options:[true, false], control: {type: 'radio'} },
    color:{options: ['primary', 'success', 'warning' , 'danger' ], control: {type: 'radio'}}
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const DefaultInput = Template.bind({});
  DefaultInput.args = {
    variant: 'outlined',
    type:'text',
    fullWidth:false,
    disabled:false, 
  };
 

