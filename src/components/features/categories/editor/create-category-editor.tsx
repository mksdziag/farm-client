import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { useAlerts } from "~/components/alerts/alerts-context";
import { AppTitle } from "~/components/shared/app-title";
import { CreateCategoryForm } from "../forms/create-category";
import type { Category } from "~/features/categories/types";
import { categoriesService } from "~/features/categories/categories.service";
import type { SubmitHandler } from "@modular-forms/qwik";

export const CreateCategoryEditor = component$(() => {
  const { addAlert } = useAlerts();

  const handleFormSubmit: QRL<SubmitHandler<Omit<Category, "id">>> = $(async (values, _event) => {
    try {
      categoriesService.createCategory(values);
      addAlert({
        type: "success",
        message: "Category created successfully",
        title: "Success",
      });
    } catch (error) {
      addAlert({
        type: "error",
        message: "Something went wrong",
        title: "Error",
      });
    }
  });

  return (
    <>
      <AppTitle text="Nowa kategoria" classes="mb-2" />
      <CreateCategoryForm onSubmit={handleFormSubmit} />
    </>
  );
});
