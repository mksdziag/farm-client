import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface MenuItem {
  url: string;
  text: string;
  iconUrl?: string;
}

function MenuListItem(props: { item: MenuItem }) {
  return (
    <li>
      <Link
        href={props.item.url}
        // activeClass={"text-accent"}
        class={"hover:bg-gray-100"}
      >
        <div class="w-5">
          <img src={props.item.iconUrl} alt="" />
        </div>
        {props.item.text}
      </Link>
    </li>
  );
}

const menuItems: MenuItem[] = [
  { url: "/", text: "Home", iconUrl: "/icons/home.svg" },
  {
    url: "/kategorie/rozrywka",
    text: "Rozrywka",
    iconUrl: "/icons/home.svg",
  },
  {
    url: "/kategorie/ciekawostki",
    text: "Ciekawostki",
    iconUrl: "/icons/home.svg",
  },
  { url: "/kategorie/sport", text: "Sport", iconUrl: "/icons/home.svg" },
  {
    url: "/kategorie/polityka",
    text: "Polityka",
    iconUrl: "/icons/home.svg",
  },
  {
    url: "/kategorie/geopolityka",
    text: "Geopolityka",
    iconUrl: "/icons/home.svg",
  },
  { url: "/kategorie/newsy", text: "Newsy", iconUrl: "/icons/home.svg" },
  { url: "/kategorie/kultura", text: "Kultura", iconUrl: "/icons/home.svg" },
  {
    url: "/kategorie/influencerzy",
    text: "Influencerzy",
    iconUrl: "/icons/home.svg",
  },
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
