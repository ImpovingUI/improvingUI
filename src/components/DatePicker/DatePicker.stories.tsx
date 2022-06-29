import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import {fireEvent, screen, userEvent } from '@storybook/testing-library';

import { DatePicker } from "./DatePicker";

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
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker blockedDates={["20/02/2022"]} {...args} />
);

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  color: "primary",
};
