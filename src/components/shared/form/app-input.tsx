import { component$ } from "@builder.io/qwik";

export const AppInput = component$(
  ({
    label,
    placeholder,
    type = "text",
    value,
    id,
    name = "",
    error,
    ...restProps
  }: {
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    id: string;
    name?: string;
    error?: string;
  }) => {
    return (
      <div class="mb-2">
        <label for={id} class="block mb-1">
          {label}
        </label>
        <div class="flex items-center text-gray-600 border rounded-md">
          <input
            {...restProps}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            class="w-full p-2.5 ml-2 bg-transparent outline-none"
          />
        </div>
        {error && <p class="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
