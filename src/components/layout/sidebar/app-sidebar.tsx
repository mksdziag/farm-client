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

export const AppSidebar = component$(({ items = [] }: { items: MenuItem[] }) => {
  return (
    <div class="flex justify-center border border-gray-200 rounded-box">
      <ul class="menu bg-base-100 w-full rounded-box">
        {items.map((item) => (
          <MenuListItem key={item.url} item={item} />
        ))}
      </ul>
    </div>
  );
});
