import type { QRL } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";
import { tagsService } from "~/features/tags/tags.service";

const tagSchema = z.object({
  name: z.string().min(3),
  key: z.string().min(3),
});

type TagForm = z.infer<typeof tagSchema>;

export const CreateTagForm = component$(() => {
  const [tagForm, { Form, Field }] = useForm<TagForm>({
    loader: useSignal<TagForm>({
      name: "",
      key: "",
    }),
    validate: zodForm$(tagSchema),
  });

  const handleFormSubmit: QRL<SubmitHandler<TagForm>> = $((values, _event) => {
    const res = tagsService.createTag(values);
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
      <AppButton type="submit" disabled={tagForm.invalid}>
        Submit
      </AppButton>
    </Form>
  );
});
