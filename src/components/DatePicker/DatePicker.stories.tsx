import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import { DatePicker } from "./DatePicker";

function myFunction(val: string) {
  console.log("The input value has changed. The new value is: " + val);
}

export default {
  title: "ReactComponentLibrary/DatePicker",
  component: DatePicker,
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "dark",
        "success",
        "info",
        "warning",
        "danger",
      ],
      control: { type: "radio" },
    },
    fullWidth: { options: [true, false], control: { type: "radio" } },
    isRequired: { options: [true, false], control: { type: "radio" } },
    initialDate: {
      control: {
        type: "text",
      },
    },
    setValue: {
      control: {
        type: "text",
      },
    },
    blockedDates: {
      control: {
        type: "array",
      },
    },
    format: {
      options: ["dd/mm/yyyy", "mm/dd/yyyy", "dd-mm-yyyy", "mm-dd-yyyy"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  name: "date",
  color: "primary",
  fullWidth: false,
  isRequired: true,
  format: "dd/mm/yyyy",
  label: "Birthday",
  setValue: (string) => {},
  //CREATE A FUNCTION THAT RECEIVE A STRING AND SET THE VALUE TO ONCHANGE
  // onChange: () => {
  //   myFunction("here");
  // },

  // initialDate: "07/08/2022",
  // blockedDates: ["07/06/2022", "07/16/2022"],
};
