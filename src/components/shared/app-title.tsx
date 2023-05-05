import { component$ } from "@builder.io/qwik";

type Size = "small" | "medium" | "large";
type TextAlign = "left" | "center" | "right";

interface AppTitleProps {
  text: string;
  size?: Size;
  textAlign?: TextAlign;
  classes?: string;
}

const sizeMap = new Map<Size, string>([
  ["small", "text-lg"],
  ["medium", "text-2xl"],
  ["large", "text-4xl"],
]);

const textAlignMap = new Map<string, string>([
  ["left", "text-left"],
  ["center", "text-center"],
  ["right", "text-right"],
]);

export const AppTitle = component$(
  ({
    text,
    size = "small",
    textAlign = "left",
    classes = "",
  }: AppTitleProps) => {
    return (
      <h1
        class={`font-bold ${classes} ${textAlignMap.get(textAlign) ?? ""} ${
          sizeMap.get(size ?? "small") ?? ""
        }`}
      >
        {text}
      </h1>
    );
  }
);
