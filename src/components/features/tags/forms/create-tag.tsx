import type { QRL } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";

const tagSchema = z.object({
  name: z.string().trim().min(3),
  key: z.string().trim().min(3),
});

type TagForm = z.infer<typeof tagSchema>;

interface CreateTagFormProps {
  onSubmit: QRL<QRL<SubmitHandler<TagForm>>>;
}

export const CreateTagForm = component$((props: CreateTagFormProps) => {
  const [tagForm, { Form, Field }] = useForm<TagForm>({
    loader: useSignal<TagForm>({
      name: "",
      key: "",
    }),
    validate: zodForm$(tagSchema),
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

      <AppButton type="submit" classes="mt-4" disabled={tagForm.invalid}>
        Zapisz
      </AppButton>
    </Form>
  );
});
