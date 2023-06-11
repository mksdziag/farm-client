import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { AlertType } from "~/components/alerts/alerts-context";

const alertColors: Map<AlertType, { bg: string; text: string }> = new Map([
  ["success", { bg: "bg-green-500", text: "text-white" }],
  ["error", { bg: "bg-red-500", text: "text-white" }],
  ["warning", { bg: "bg-yellow-500", text: "text-white" }],
  ["info", { bg: "bg-blue-500", text: "text-white" }],
]);

interface AppAlertProps {
  variant: AlertType;
  message: string;
  title?: string;
  onClose?: QRL<() => any>;
}

export const AppAlert = component$(
  ({ message, title, variant = "info", onClose = undefined }: AppAlertProps) => {
    const { bg: bgColor, text: textColor } = alertColors.get(variant)!;

    return (
      <div class={`p-2 rounded-md my-2 ${bgColor}`}>
        <div class="flex justify-between">
          <div class="flex">
            <div class="self-center ml-3">
              {title && <div class={`font-semibold ${textColor}`}>{title}</div>}

              <div class={`${textColor}`}>
                <div class="mt-1">{message}</div>
              </div>
            </div>
          </div>
          <button
            class={`self-start ${textColor}`}
            onClick$={() => (typeof onClose === "function" ? onClose() : null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  },
);
