import type { QRL, QwikSubmitEvent } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { CreateArticleForm } from "../forms/create-article";
import { articlesService } from "~/features/articles/articles.service";
import type { Article } from "~/features/articles/types";
import { AppTitle } from "~/components/shared/app-title";
import { useAlerts } from "~/components/alerts/alerts-context";

export const ExistingArticleEditor = component$((props: { initialValues: Article }) => {
  const { addAlert } = useAlerts();

  const handleFormSubmit: QRL<
    (
      values: Omit<Article, "id" | "tags" | "categories">,
      _event: QwikSubmitEvent<HTMLFormElement>,
    ) => Promise<void>
  > = $(
    async (
      values: Omit<Article, "id" | "tags" | "categories">,
      _event: QwikSubmitEvent<HTMLFormElement>,
    ) => {
      const { data, error } = await articlesService.updateArticle(props.initialValues.id, values);
      if (error) {
        addAlert({
          type: "error",
          message: error.message,
          title: "Error",
        });
      }
      if (data?.id) {
        addAlert({
          type: "success",
          message: "Article updated successfully",
          title: "Success",
        });
      }
    },
  );

  return (
    <>
      <AppTitle text="Edytuj artykuł" classes="mb-2" />
      <CreateArticleForm onSubmit={handleFormSubmit} initialValues={props.initialValues} />
    </>
  );
});
