import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: "submit" | "button";
}

export const AppButton = component$(
  ({ disabled = false, type = "button", ...restProps }: AppButtonProps) => {
    console.log(restProps);
    console.log(type);
    console.log(disabled);
    return (
      <button
        {...restProps}
        type={type}
        disabled={disabled}
        class="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg disabled:bg-indigo-400 "
      >
        <Slot />
      </button>
    );
  },
);
