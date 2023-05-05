import { $, component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AppContent } from "~/components/layout/app-content";
import { AppFooter } from "~/components/layout/footer/app-footer";
import { AppHeader } from "~/components/layout/header/app-header";
import { AppSidebar } from "~/components/layout/sidebar/app-sidebar";
import { AppContainer } from "~/components/shared/app-container";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const logout = $(() => {
    console.log("logout");
  });
  return (
    <>
      <div class="min-h-screen flex flex-col">
        <AppHeader user={null} logout={logout} />
        <AppContainer>
          <div class="grid grid-cols-12 gap-4 p-2">
            <div class="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2">
              <AppSidebar />
            </div>
            <div class="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10">
              <AppContent>
                <Slot />
              </AppContent>
            </div>
          </div>
        </AppContainer>
        <AppFooter />
      </div>
    </>
  );
});
