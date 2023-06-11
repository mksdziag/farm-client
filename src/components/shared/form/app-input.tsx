import { component$ } from "@builder.io/qwik";

type AppInputProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  id: string;
  name?: string;
  error?: string;
};

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
  }: AppInputProps) => {
    return (
      <div class="mb-2">
        <label for={id} class="block mb-1">
          {label}
        </label>
        <div class="flex items-center border rounded-md">
          <input
            {...restProps}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            class="w-full p-2 ml-2 bg-transparent outline-none"
          />
        </div>
        {error && <p class="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
