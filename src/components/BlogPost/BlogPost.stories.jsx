import React from "react";
import image from "../../images/rectangle1.png";
import { BlogPost } from ".";

const defaultArg = {
  component: BlogPost,
  title: "BlogPost",
};

export default defaultArg;

const Template = (args) => <BlogPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  image,
  imageAlt: "8 Best Programming Languages For Maths ",
  title: "Blog Post",
  date: "October 9, 2022",
  link: "#link",
};
