import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import {Modal} from './Modal';

export default {
    title:'ReactComponentLibrary/Modal',
    component: Modal,
  argTypes:{
    
  }

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const DefaultModal = Template.bind({});
    DefaultModal.args = {
        
    }


