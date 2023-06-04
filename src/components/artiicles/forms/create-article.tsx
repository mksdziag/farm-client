import type { QRL } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { AppInput } from "~/components/shared/form/app-input";
import z from "zod";

import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { AppButton } from "~/components/shared/buttons/app-button";
import { articlesService } from "~/features/articles/articles.service";

const articleFormSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  content: z.string().min(3),
  cover: z.string(),
});

type ArticleForm = z.infer<typeof articleFormSchema>;

export const CreateArticleForm = component$(() => {
  const [articleForm, { Form, Field }] = useForm<ArticleForm>({
    loader: useSignal<ArticleForm>({
      title: "",
      description: "",
      content: "",
      cover: "",
    }),
    validate: zodForm$(articleFormSchema),
  });

  const handleFormSubmit: QRL<SubmitHandler<ArticleForm>> = $((values, event) => {
    console.log(articleForm.internal);
    console.log(values);
    console.log(event);

    const res = articlesService.createArticle(values);
    console.log(res);
  });

  return (
    <Form onSubmit$={handleFormSubmit}>
      <Field name="title">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value}
              label="Title"
              placeholder="Title"
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
      <Field name="content">
        {(field, props) => {
          return (
            <AppInput
              {...props}
              value={field.value}
              label="Content"
              placeholder="Content of the article"
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
              value={field.value}
              label="Cover"
              placeholder="cover of the article"
              type="text"
              name="cover"
              id="cover"
              error={field.error ?? ""}
            />
          );
        }}
      </Field>
      <AppButton type="submit" disabled={articleForm.invalid}>
        Submit
      </AppButton>
    </Form>
  );
});
