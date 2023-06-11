import type { QRL, QwikSubmitEvent } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";

const articleFormSchema = z.object({
  title: z.string().trim().min(3),
  description: z.string().trim().min(3),
  content: z.string().trim().min(3),
  cover: z.string().trim().url(),
});

type ArticleForm = z.infer<typeof articleFormSchema>;

interface ArticleFormProps {
  initialValues?: ArticleForm;
  onSubmit: QRL<(values: ArticleForm, event: QwikSubmitEvent<HTMLFormElement>) => Promise<void>>;
}

export const CreateArticleForm = component$((props: ArticleFormProps) => {
  const [articleForm, { Form, Field }] = useForm<ArticleForm>({
    loader: useSignal<ArticleForm>({
      title: props.initialValues?.title ?? "",
      description: props.initialValues?.description ?? "",
      content: props.initialValues?.content ?? "",
      cover: props.initialValues?.cover ?? "",
    }),
    validate: zodForm$(articleFormSchema),
  });

  return (
    <Form onSubmit$={props.onSubmit}>
      <Field name="title">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Tytuł"
              placeholder="Tytuł"
              type="text"
              name="title"
              id="title"
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
      <Field name="content">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Zawartość"
              placeholder="Zawartość artykułu"
              type="text"
              name="content"
              id="content"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>
      <Field name="cover">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value ?? ""}
              label="Okładka"
              placeholder="Link do zasobu online"
              type="text"
              name="cover"
              id="cover"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>

      <AppButton type="submit" classes="mt-4" disabled={articleForm.invalid}>
        Zapisz
      </AppButton>
    </Form>
  );
});
