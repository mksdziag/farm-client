import type { QRL } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";
import { categoriesService } from "~/features/categories/categories.service";

const categorySchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  key: z.string().min(3),
});

type CategoryForm = z.infer<typeof categorySchema>;

export const CreateCategoryForm = component$(() => {
  const [categoryForm, { Form, Field }] = useForm<CategoryForm>({
    loader: useSignal<CategoryForm>({
      name: "",
      description: "",
      key: "",
    }),
    validate: zodForm$(categorySchema),
  });

  const handleFormSubmit: QRL<SubmitHandler<CategoryForm>> = $((values, _event) => {
    const res = categoriesService.createCategory(values);
    console.log(res);
  });

  return (
    <Form onSubmit$={handleFormSubmit}>
      <Field name="name">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value}
              label="name"
              placeholder="name"
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
              value={field.value}
              label="Description"
              placeholder="Description"
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
              value={field.value}
              label="key"
              placeholder="key of the the category"
              type="text"
              name="key"
              id="key"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>
      <AppButton type="submit" disabled={categoryForm.invalid}>
        Submit
      </AppButton>
    </Form>
  );
});
