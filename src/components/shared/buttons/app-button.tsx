import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export type AppButtonType = "submit" | "button";
export type AppButtonSize = "sm" | "md" | "lg";
export type AppButtonColor = "primary" | "secondary" | "error" | "success" | "warning";

interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: AppButtonType;
  classes?: string;
  size?: AppButtonSize;
  variant?: AppButtonColor;
}

const sizeClasses: Map<AppButtonSize, string> = new Map([
  ["sm", "px-4 py-1"],
  ["md", "px-8 py-2"],
  ["lg", "px-16 py-4"],
]);

const variantClasses: Map<AppButtonColor, string> = new Map([
  [
    "primary",
    "bg-indigo-600 text-white border-indigo-600 hover:bg-transparent hover:text-indigo-600 active:text-indigo-500",
  ],
  [
    "secondary",
    "bg-transparent text-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 active:text-indigo-500",
  ],
  [
    "error",
    "bg-red-600 text-white border-red-600 hover:bg-transparent hover:text-red-600 active:text-red-500",
  ],
  [
    "success",
    "bg-green-600 text-white border-green-600 hover:bg-transparent hover:text-green-600 active:text-green-500",
  ],
  [
    "warning",
    "bg-yellow-600 text-white border-yellow-600 hover:bg-transparent hover:text-yellow-600 active:text-yellow-500",
  ],
]);

export const AppButton = component$(
  ({
    disabled = false,
    type = "button",
    size = "md",
    variant = "primary",
    classes = "",
    ...restProps
  }: AppButtonProps) => {
    const sizeClass = sizeClasses.get(size);
    const variantClass = variantClasses.get(variant);

    return (
      <button
        type={type}
        disabled={disabled}
        class={`inline-block rounded border text-sm font-medium focus:outline-none focus:ring  ${sizeClass} ${variantClass} ${classes}`}
        {...restProps}
      >
        <Slot />
      </button>
    );
  },
);
