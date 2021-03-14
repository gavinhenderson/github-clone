import React from "react";

import Card from "./activity-card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
