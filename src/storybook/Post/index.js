import React from "react";
import { storiesOf } from "@storybook/react";
import Post from 'components/Post';
// import PostSection from "components/PostSection";
import store from "stores";
import { Provider } from "react-redux";
storiesOf("Social Post", module).add("default", () => (
  <Provider store={store}>
    <Post />
  </Provider>
));
