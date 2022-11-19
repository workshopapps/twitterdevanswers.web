import React from "react";
import { Button } from ".";

const defaultArg = {
  component: Button,
  title: "Button",
};

export default defaultArg;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Link = Template.bind({});
Link.args = {
  component: "a",
  children: "Button",
  href: "#button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
  outline: true,
};
