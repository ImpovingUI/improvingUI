import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import  {Input} from './Input';


export default {
  title: 'ReactComponentLibrary/Input',
  component: Input,
  argTypes: {
    type: { options:['email','password','text', 'number','submit','text-area'], control: {type: 'radio'} },
    color: {options:['primary','secondary','dark','success','info','warning','danger'], control: {type: 'radio'} },
    variant: {options:['outlined', 'filled', 'underlined'], control: {type: 'radio'} },
    fullWidth: {options:[true, false], control: {type: 'radio'} },
    disabled: {options:[true, false], control: {type: 'radio'} },
    isRequired: {options:['required', 'notRequired'], control: {type: 'radio'}},
    onClick: {action: 'clicked'},
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
 
  export const PlaceholderInput = Template.bind({});
  PlaceholderInput.args = {
    variant: 'outlined',
    type:'text',
    fullWidth:false,
    disabled:false, 
    placeholder: 'Tap in this input'
  };
