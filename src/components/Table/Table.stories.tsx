import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';
const ejemplo = require('./Ejemplo.json');
import {Table} from './index';

export default {
    title: 'ReactComponentLibrary/Table',
    component: Table,
    argTypes: {
        filter: {options:[true, false], control: {type: 'radio'}},
        pagination: {options:[true, false], control: {type: 'radio'}}
    }
  } as ComponentMeta<typeof Table>;
  const Template: ComponentStory<typeof Table> = (args) => 
    <Table
        listColumns={['Nombre','Apellido','Ciudad','Estado','Numero']}
        listRows = {ejemplo.datos}
        {
            ...args
        }
    />

    
export const DefaultTable = Template.bind({});
DefaultTable.args = {
    filter: false,
    pagination: false
};