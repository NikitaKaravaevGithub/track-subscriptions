import { Provider } from "react-redux";
import { Header as HeaderComponent } from "./Header";
import { store } from "store";
import type { StoryDefault } from "@ladle/react";

export default {
  decorators: [
    (Component) => (
      <Provider store={store}>
        <Component />
      </Provider>
    ),
  ],
} satisfies StoryDefault;

export const Default = HeaderComponent;
