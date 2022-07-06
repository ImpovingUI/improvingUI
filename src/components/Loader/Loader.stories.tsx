import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { fireEvent, screen, userEvent } from "@storybook/testing-library";

import { Loader } from "./Loader";

export default {
  title: "ReactComponentLibrary/Loader",
  component: Loader,
  argTypes: {
    color: {
      options: ["primary", "secondary", "dark"],
      control: { type: "radio" },
    },
    visible: {
        options: [true, false],
        control: { type: "radio" },
      },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultLoader = Template.bind({});
DefaultLoader.args = {
  color: "primary",
  visible: true,
};

// export const ClickExample = Template.bind({});
// ClickExample.play = async () => {
//   await userEvent.click(screen.getByRole("button"));
// };
