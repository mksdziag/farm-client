import type { QRL, QwikSubmitEvent } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { CreateArticleForm } from "../forms/create-article";
import { useAlerts } from "~/components/alerts/alerts-context";
import { articlesService } from "~/features/articles/articles.service";
import type { Article } from "~/features/articles/types";
import { AppTitle } from "~/components/shared/app-title";
import { useNavigate } from "@builder.io/qwik-city";

export const CreateArticleEditor = component$((props: { initialValues?: Article }) => {
  const navigate = useNavigate();
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
      const { data, error } = await articlesService.createArticle(values);
      if (error) {
        addAlert({
          type: "error",
          message: "Something went wrong",
          title: "Error",
        });
      }

      if (data?.id) {
        addAlert({
          type: "success",
          message: "Article created successfully",
          title: "Success",
        });

        // Navigate to the article - maybe implement the better way to do this
        setTimeout(() => {
          navigate("/account/manage/articles/edit/" + data.id);
        }, 300);
      }
    },
  );

  return (
    <>
      <AppTitle text="Nowy artykuł" classes="mb-2" />
      <CreateArticleForm onSubmit={handleFormSubmit} initialValues={props.initialValues} />
    </>
  );
});
