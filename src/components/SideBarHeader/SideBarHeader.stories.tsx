import React,{useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import '../css/main.css'
import  {SideBarHeader} from './SideBarHeader';
import { Button } from '../Button';
import { Li } from '../Li';

export default {
  title: 'ReactComponentLibrary/SideBarHeader',
  component: SideBarHeader,
  argTypes: {
    onClick: {action: 'clicked'},
  }
} as ComponentMeta<typeof SideBarHeader>;

const TemplateSideBarHeader: ComponentStory<typeof SideBarHeader> = (args) => <SideBarHeader

  infoNav={'Bienvenido Barrabas'}
  iconNav={<Button label={'usuario'} color={'dark'}/>}

  children={
    <div>
      <h1>Contenido principal</h1>
    </div>
  }
 {...args}
 />;


export const storySideBarHeader = TemplateSideBarHeader.bind({});
  storySideBarHeader.args = {
    legendNav: 'Improving',
    iconNav: <Button size={'small'} onlyIcon={<span>MO</span>} color='primary'/>,
    infoNav: 'Bienvenida Monica',
    links:<>
      <a>
        <Li icon='🔗' text='link 200' className='active-Li' />
      </a>
      <a>
        <Li icon='🔗' text='link 200' className='active-Li' />
      </a>
      <a>
        <Li icon='🔗' text='link 200' className='active-Li' />
      </a>
      <a>
        <Li icon='🔗' text='link 200' className='active-Li' />
      </a>
    </> 
    
  };

//   export const ClickExample = Template.bind({});
//   ClickExample.play = async () => {
//     await userEvent.click(screen.getByRole('button'));
//   }