import React from "react"; 
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {fireEvent, screen, userEvent } from '@storybook/testing-library';
import Dropdown from "./Dropdown";

export default {
    title: 'ReactComponentLibrary/Dropdown',
    component: Dropdown,
    argTypes: {
        image: {control: 'string'}, 
        user: {control: 'string'},
        occupation: {control: 'string'}, 
        position: { control: 'radio', options: ['left', 'right'] },
        variant: { control: 'radio', options: ['contained', 'outlined'] },
        color: { control: 'radio', options: ['primary', 'secondary', 'dark', 'success', 'info', 'warning', 'danger'] },
        onClick: {action: 'clicked'},
    }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) =>
    <div style={{display:"flex", justifyContent:"center"}}>
        <Dropdown
            links ={
                <>
                <li>
                    <a href="https://www.google.com">Test</a> 
                </li>
                <li>
                    <a href="https://www.google.com">Test</a> 
                </li>
                <li> 
                    <button><a href="https://www.google.com">Test</a> </button> 
                </li>
                </>
            } {...args} />
    </div>;

export const DropdownTest = Template.bind({});
DropdownTest.args = { 
    image: 'https://img.freepik.com/vector-gratis/simbolo-realista-taijitu-yin-yang-blanco-negro_7672-705.jpg?w=2000',
    user: 'Monica',
    occupation: 'Talent Management' 
}; 
