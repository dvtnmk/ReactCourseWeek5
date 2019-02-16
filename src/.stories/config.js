import { configure } from "@storybook/react";

function loader() {
  require('../storybook');
}

configure(loader, module);