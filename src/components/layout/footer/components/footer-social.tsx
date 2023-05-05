// import FacebookIcon from "~/assets/icons/social/facebook.svg?component-solid";
// import InstagramIcon from "~/assets/icons/social/instagram.svg?component-solid";
// import TwitterIcon from "~/assets/icons/social/twitter.svg?component-solid";
// import YoutubeIcon from "~/assets/icons/social/youtube.svg?component-solid";

import { component$ } from "@builder.io/qwik";

const InstagramIcon = component$(() => null);
const FacebookIcon = component$(() => null);
const TwitterIcon = component$(() => null);
const YoutubeIcon = component$(() => null);

const socials: {
  url: string;
  text: string;
  icon: any;
  id: string;
}[] = [
  {
    url: "https://www.instagram.com/",
    text: "Instagram",
    id: "instagram",
    icon: <InstagramIcon />,
  },
  {
    url: "https://www.facebook.com/",
    text: "Facebook",
    id: "facebook",
    icon: <FacebookIcon />,
  },
  {
    url: "https://www.twitter.com/",
    text: "Twitter",
    id: "twitter",
    icon: <TwitterIcon />,
  },
  {
    url: "https://www.youtube.com/",
    text: "YouTube",
    id: "youtube",
    icon: <YoutubeIcon />,
  },
];

export function FooterSocial() {
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
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
