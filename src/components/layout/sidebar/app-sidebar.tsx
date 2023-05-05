import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
// import HomeIcon from "~/assets/icons/home.svg";

const HomeIcon = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
});

interface MenuItem {
  url: string;
  text: string;
  icon?: JSX.Element;
}

function MenuListItem(props: { item: MenuItem }) {
  return (
    <li>
      <Link
        href={props.item.url}
        // activeClass={"text-accent"}
        class={"hover:bg-gray-100"}
      >
        <div class="w-5">{props.item.icon}</div>
        {props.item.text}
      </Link>
    </li>
  );
}

const menuItems: MenuItem[] = [
  { url: "/", text: "Home", icon: <HomeIcon /> },
  { url: "/kategorie/rozrywka", text: "Rozrywka", icon: <HomeIcon /> },
  { url: "/kategorie/ciekawostki", text: "Ciekawostki", icon: <HomeIcon /> },
  { url: "/kategorie/sport", text: "Sport", icon: <HomeIcon /> },
  { url: "/kategorie/polityka", text: "Polityka", icon: <HomeIcon /> },
  { url: "/kategorie/geopolityka", text: "Geopolityka", icon: <HomeIcon /> },
  { url: "/kategorie/newsy", text: "Newsy", icon: <HomeIcon /> },
  { url: "/kategorie/kultura", text: "Kultura", icon: <HomeIcon /> },
  { url: "/kategorie/influencerzy", text: "Influencerzy", icon: <HomeIcon /> },
];

export const AppSidebar = component$(() => {
  return (
    <div class="flex justify-center border border-gray-200 rounded-box">
      <ul class="menu bg-base-100 w-full rounded-box">
        {menuItems.map((item) => (
          <MenuListItem key={item.url} item={item} />
        ))}
      </ul>
    </div>
  );
});
