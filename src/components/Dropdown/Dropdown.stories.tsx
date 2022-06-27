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
        isOpen: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        items: { 
            control: { 
                type: 'array'
            } 
        }, 
        size: { control: 'select', options: ['medium', 'small', 'large'] },
        variant: { control: 'select', options: ['contained', 'outlined', 'text'] }, 
        color: { control: 'select', options: ['primary', 'secondary', 'dark', 'success', 'info', 'warning', 'danger'] },
    } 
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = { 
    image: 'https://img.freepik.com/vector-gratis/simbolo-realista-taijitu-yin-yang-blanco-negro_7672-705.jpg?w=2000',
    user: 'Monica',
    occupation: 'Talent Management'
}; 
