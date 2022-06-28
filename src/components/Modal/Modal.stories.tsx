import React from 'react';
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
           <div id='footer'>
              <Button fullWidth={true}/>
              <Button fullWidth={true}/>
            </div>
            <div id='body'>
            <p>body</p>
      
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, sint ad tempore doloribus commodi obcaecati aut optio earum dolores eos laboriosam fuga natus culpa incidunt odio perspiciatis. Recusandae, assumenda possimus?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, sint ad tempore doloribus commodi obcaecati aut optio earum dolores eos laboriosam fuga natus culpa incidunt odio perspiciatis. Recusandae, assumenda possimus?
              lorem*10
            </div>
           
          </>
        )
    }


