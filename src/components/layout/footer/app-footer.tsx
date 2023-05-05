import { AppContainer } from "~/components/shared/app-container";
import { FooterSocial } from "~/components/layout/footer/components/footer-social";
import { FooterMenu } from "~/components/layout/footer/components/menu";
import { component$ } from "@builder.io/qwik";
interface Link {
  text: string;
  url: string;
}

const menuLinks1: Link[] = [
  {
    text: "O projekcie",
    url: "/pages/o-projekcie",
  },

  {
    text: "FAQ",
    url: "/pages/faq",
  },

  {
    text: "Kontakt",
    url: "/pages/kontakt",
  },
  {
    text: "Regulamin",
    url: "/pages/regulamin",
  },
  {
    text: "Polityka prywatności",
    url: "/pages/polityka-prywatnosci",
  },
];

const menuLinks2: Link[] = [
  {
    text: "Strona główna",
    url: "/",
  },
  {
    text: "Kategorie",
    url: "/kategorie",
  },
  {
    text: "Artykuły",
    url: "/artykuly",
  },
  {
    text: "Tagi",
    url: "/tagi",
  },
  {
    text: "Zaloguj się",
    url: "/account/auth/login",
  },
  {
    text: "Moje konto",
    url: "/account",
  },
];

export const AppFooter = component$(() => {
  return (
    <div class="mt-auto bg-base-300 text-base-content">
      <AppContainer>
        <footer class="footer py-10">
          <FooterMenu items={menuLinks2} title="Menu" />
          <FooterMenu items={menuLinks1} title="O nas" />

          <FooterSocial />
        </footer>
      </AppContainer>
    </div>
  );
});
