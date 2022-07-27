import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import {Modal} from './Modal';
import { Button } from '../Button';

export default {
    title:'ReactComponentLibrary/Modal',
    component: Modal,
  argTypes:{
  }

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const DefaultModal = Template.bind({});
    DefaultModal.args = {
        show: false,
        header: 'Modal',
        size: 'md',
        children: (
          <>
            <div id='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur quaerat accusamus facilis nesciunt deleniti, animi consequuntur maiores odio libero vitae id molestias, fugit tempore! Placeat veritatis eos praesentium ipsa?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis, saepe temporibus non expedita, quidem id ipsam aspernatur culpa facere sit accusamus? Earum autem delectus aspernatur quas odit provident odio?
            </p>
            </div>
            <div id='footer'>
              <Button label='Btn Modal'/>
            </div>
          </>
        )
       
    }


