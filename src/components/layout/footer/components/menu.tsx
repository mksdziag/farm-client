import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface MenuItem {
  text: string;
  url: string;
}

interface FooterMenuProps {
  items: MenuItem[];
  title: string;
}

export const FooterMenu = component$((props: FooterMenuProps) => {
  return (
    <div>
      <span class="footer-title">{props.title}</span>
      {props.items.map((item) => (
        <Link key={item.url} href={item.url} class="link link-hover">
          {item.text}
        </Link>
      ))}
    </div>
  );
});
