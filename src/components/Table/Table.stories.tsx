import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';
const ejemplo = require('./Ejemplo.json');
import {Table} from './index';
import { Button } from '../Button/Button';

export default {
    title: 'ReactComponentLibrary/Table',
    component: Table,
    argTypes: {
        filter: {options:[true, false], control: {type: 'radio'}},
        pagination: {options:[true, false], control: {type: 'radio'}}
    }
  } as ComponentMeta<typeof Table>;

  const nombres = ejemplo.datos;

  const Template: ComponentStory<typeof Table> = (args) => 
    <Table
        listColumns={["Name","Last Name","City","State","Phone"]}
        listRows = {nombres}
        actions={[<Button label="hola" onClick={() => {console.log("Hello")}}/>]}
        {
            ...args
        }
    />

    
export const DefaultTable = Template.bind({});
DefaultTable.args = {
    filter: true,
    pagination: true
};

export const SafeTable = Template.bind({});
SafeTable.args = {
    filter: true,
    pagination: true,
    minInput: 3
};