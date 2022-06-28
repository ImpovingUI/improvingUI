import React,{useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';
import  {LiRouter} from './LiRouter';

export default {
  title: 'ReactComponentLibrary/Li',
  component: LiRouter,
  argTypes: {
    onClick: {action: 'clicked'},
  }
} as ComponentMeta<typeof LiRouter>;

const TemplateLi: ComponentStory<typeof LiRouter> = (args) => <LiRouter {...args}/>;


export const storyLi = TemplateLi.bind({});
  storyLi.args = {
    icon: '🔗',
    text: 'primary',
  };

//   export const ClickExample = Template.bind({});
//   ClickExample.play = async () => {
//     await userEvent.click(screen.getByRole('button'));
//   }