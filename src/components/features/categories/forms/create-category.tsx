import type { QRL, QwikSubmitEvent } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";

const categorySchema = z.object({
  name: z.string().trim().min(3),
  description: z.string().trim().min(3),
  key: z.string().trim().min(3),
});

type CategoryForm = z.infer<typeof categorySchema>;

interface CreateCategoryFormProps {
  onSubmit: QRL<(values: CategoryForm, event: QwikSubmitEvent<HTMLFormElement>) => Promise<void>>;
}

export const CreateCategoryForm = component$((props: CreateCategoryFormProps) => {
  const [categoryForm, { Form, Field }] = useForm<CategoryForm>({
    loader: useSignal<CategoryForm>({
      name: "",
      description: "",
      key: "",
    }),
    validate: zodForm$(categorySchema),
  });

  return (
    <Form onSubmit$={props.onSubmit}>
      <Field name="name">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Nazwa"
              placeholder="Nazwa"
              type="text"
              name="name"
              id="name"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>
      <Field name="description">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Opis"
              placeholder="Opis"
              type="text"
              name="description"
              id="description"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>
      <Field name="key">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Klucz"
              placeholder="Unikalny klucz"
              type="text"
              name="key"
              id="key"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>

      <AppButton type="submit" classes="mt-4" disabled={categoryForm.invalid}>
        Zapisz
      </AppButton>
    </Form>
  );
});
