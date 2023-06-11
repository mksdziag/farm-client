import { $, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { useAlerts } from "~/components/alerts/alerts-context";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { AppButton } from "~/components/shared/buttons/app-button";
import { AppModalConfirm } from "~/components/shared/modals/app-modal-confirm";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { articlesService } from "~/features/articles/articles.service";
import { useModalConfirm } from "~/hooks/use-modal-confirm/use-modal-confirm";

export const useManageCategoriesPageData = routeLoader$(async (e) => {
  const [articlesResponse] = await Promise.all([articlesService.getArticles({ _limit: 12 })]);

  if (!articlesResponse || articlesResponse.error) {
    throw e.redirect(302, "/");
  }

  return {
    articles: articlesResponse.data,
  };
});

export default component$(() => {
  const breadcrumbs = getBreadcrumbs("/account");
  const pageData = useManageCategoriesPageData();

  const { addAlert } = useAlerts();
  const { isOpen, open, close } = useModalConfirm();
  const idToRemove = useSignal<string | null>(null);

  const handleRemove = $(async () => {
    if (idToRemove.value) {
      const { error } = await articlesService.removeArticle(idToRemove.value);
      if (error) {
        addAlert({
          type: "error",
          title: "Błąd",
          message: error.message,
        });
        return;
      }

      addAlert({
        type: "success",
        title: "Powodzenie",
        message: "Poprawnie usunięto artykuł",
      });

      // TODO: Remove from pageData maybe with action from qwik
      pageData.value.articles = pageData.value.articles!.filter(
        (item) => item.id !== idToRemove.value,
      );
    }

    close();
    idToRemove.value = null;
  });

  const removeClick = $((id: string) => {
    idToRemove.value = id;
    open();
  });

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Moje konto - dodawanie nowego artykułu" />
      {pageData.value.articles === null ? (
        <p>Brak artykułów</p>
      ) : (
        <div class="overflow-x-auto">
          <div class="w-full max-w-xxl">
            {isOpen.value && <AppModalConfirm onClose={close} onConfirm={handleRemove} />}
            <table class="table-fixed min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead class="text-left">
                <tr>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-32">Title</th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-32">Author</th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-32">
                    Published
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-32">
                    Publish date
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                {pageData.value.articles.map((article) => {
                  return (
                    <tr key={article.id}>
                      <td class="px-4 py-2 font-medium w-32">
                        <span class="">{article.title}</span>
                      </td>
                      <td class="px-4 py-2 font-medium w-32">
                        <span class="">{article.description}</span>
                      </td>
                      <td class="px-4 py-2 font-medium w-32">
                        <span class="">xxx</span>
                      </td>
                      <td class="px-4 py-2 font-medium w-32">
                        <span class="">11.11.2011</span>
                      </td>
                      <td class="px-4 py-2 font-medium w-64">
                        <ul class="flex flex-wrap gap-1">
                          <li>
                            <Link href={`/account/manage/articles/edit/${article.id}`}>
                              <AppButton size="sm">Edit</AppButton>
                            </Link>
                          </li>
                          <li>
                            <AppButton
                              size="sm"
                              variant="error"
                              onClick$={() => removeClick(article.id)}
                            >
                              Remove
                            </AppButton>
                          </li>
                          <li>
                            <AppButton variant="warning" size="sm">
                              Ban
                            </AppButton>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Moje konto",
  meta: [
    {
      name: "description",
      content: "Moje konto - zarządzanie artykułami",
    },
  ],
};
