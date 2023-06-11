import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type { AppButtonType } from "./app-button";

interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: AppButtonType;
}

export const AppButtonText = component$(
  ({ disabled = false, type = "button", ...restProps }: AppButtonProps) => {
    return (
      <button
        type={type}
        disabled={disabled}
        class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
        {...restProps}
      >
        <Slot />
      </button>
    );
  },
);
