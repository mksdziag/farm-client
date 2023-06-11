import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { AppTitle } from "~/components/shared/app-title";
import { CreateTagForm } from "../forms/create-tag";
import type { Tag } from "~/features/tags/types";
import { tagsService } from "~/features/tags/tags.service";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useAlerts } from "~/components/alerts/alerts-context";

export const CreateTagEditor = component$(() => {
  const { addAlert } = useAlerts();

  const handleFormSubmit: QRL<SubmitHandler<Omit<Tag, "id">>> = $(async (values, _event) => {
    const { data, error } = await tagsService.createTag(values);

    if (error) {
      addAlert({
        type: "error",
        message: error?.message,
        title: "Error",
      });
    }

    if (data?.id) {
      addAlert({
        type: "success",
        message: "Tag created successfully",
        title: "Success",
      });
    }
  });

  return (
    <>
      <AppTitle text="Nowy tag" classes="mb-2" />
      <CreateTagForm onSubmit={handleFormSubmit} />
    </>
  );
});
