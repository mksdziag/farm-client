import { component$ } from "@builder.io/qwik";

const socials: {
  url: string;
  text: string;
  iconUrl: string;
  id: string;
}[] = [
  {
    url: "https://www.instagram.com/",
    text: "Instagram",
    id: "instagram",
    iconUrl: "/icons/social.svg",
  },
  {
    url: "https://www.facebook.com/",
    text: "Facebook",
    id: "facebook",
    iconUrl: "/icons/social.svg",
  },
  {
    url: "https://www.twitter.com/",
    text: "Twitter",
    id: "twitter",
    iconUrl: "/icons/social.svg",
  },
  {
    url: "https://www.youtube.com/",
    text: "YouTube",
    id: "youtube",
    iconUrl: "/icons/social.svg",
  },
];

export const FooterSocial = component$(() => {
  return (
    <div>
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            title={social.text}
            target="_blank"
            rel="noopener noreferrer"
            class="block w-7 h-7"
          >
            <img src={social.iconUrl} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
});
