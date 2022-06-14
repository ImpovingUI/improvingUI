import React,{useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import  {NavBar} from './NavBar';

export default {
  title: 'ReactComponentLibrary/NavBar',
  component: NavBar,
  argTypes: {
    color: {options:['primary','secondary','dark','success','info','warning','danger'], control: {type: 'radio'} },
    position: {options:['static','fixed','sticky'], control: {type: 'radio'} },
    shadow: {options:[true, false], control: {type: 'radio'} },
    onClick: {action: 'clicked'},
  }
} as ComponentMeta<typeof NavBar>;

const TemplateNavBar: ComponentStory<typeof NavBar> = (args) => <NavBar children={
<>
  <li><a href='#'>link 1</a></li>
  <li><a href='#'>link 2</a></li>
  <li><a href='#'>link 3</a></li>
</>
} {...args} />;


export const storyNavBar = TemplateNavBar.bind({});
  storyNavBar.args = {
    color: 'primary',
    position:'sticky',
    shadow:false,
    iconNav:'🏠',
    iconSide:'🏠'
  };

//   export const ClickExample = Template.bind({});
//   ClickExample.play = async () => {
//     await userEvent.click(screen.getByRole('button'));
//   }