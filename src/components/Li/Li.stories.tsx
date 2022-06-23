import React,{useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import  {Li} from './Li';

export default {
  title: 'ReactComponentLibrary/Li',
  component: Li,
  argTypes: {
    onClick: {action: 'clicked'},
  }
} as ComponentMeta<typeof Li>;

const TemplateLi: ComponentStory<typeof Li> = (args) => <Li {...args}/>;


export const storyLi = TemplateLi.bind({});
  storyLi.args = {
    icon: '🔗',
    text: 'primary',
  };

//   export const ClickExample = Template.bind({});
//   ClickExample.play = async () => {
//     await userEvent.click(screen.getByRole('button'));
//   }