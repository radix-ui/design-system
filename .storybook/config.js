import { configure } from "@storybook/react";

configure(loadStories, module);

function loadStories() {
  const req = require.context("../src", true, /\.story\.(js|tsx)$/);
  req.keys().forEach(filename => req(filename));
}
