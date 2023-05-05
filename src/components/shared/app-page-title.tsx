import { component$ } from "@builder.io/qwik";
import { AppTitle } from "./app-title";

export const AppPageTitle = component$(
  ({ classes = "mb-5", text }: { text: string; classes?: string }) => {
    return <AppTitle size="large" text={text} classes={classes}></AppTitle>;
  }
);
