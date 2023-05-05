import type { JSX } from "@builder.io/qwik/jsx-runtime";

export interface BreadcrumbItem {
  text: string;
  path: string;
  icon?: JSX.Element;
}

interface BreadcrumbsConfig {
  text: string;
  path: string;
  children?: BreadcrumbsConfig[];
}

export const breadcrumbsConfig: BreadcrumbsConfig[] = [
  {
    path: "/",
    text: "Strona główna",
    children: [
      {
        path: "/artykuly",
        text: "Artykuły",
        children: [
          {
            text: "Artykuł",
            path: "/:id",
          },
        ],
      },
      {
        path: "/tagi",
        text: "Tagi",
        children: [
          {
            text: "Tag",
            path: "/:id",
          },
        ],
      },
      {
        path: "/kategorie",
        text: "Kategorie",
        children: [
          {
            text: "Kategoria",
            path: "/:id",
          },
        ],
      },
      {
        path: "/profile",
        text: "Profil",
      },
      {
        path: "/pages",
        text: "Strony",
        children: [
          {
            text: "Kontakt",
            path: "/kontakt",
          },
          {
            text: "FAQ",
            path: "/faq",
          },
          {
            text: "Regulamin",
            path: "/regulamin",
          },
          {
            text: "Polityka prywatności",
            path: "/polityka-prywatnosci",
          },
          {
            text: "O projekcie",
            path: "/o-projekcie",
          },
        ],
      },
      {
        path: "/account",
        text: "Moje Konto",
      },
    ],
  },
];

const clearPath: (path: string) => string = (path: string) => {
  if (path === "/") return path;
  return path.startsWith("/") ? path.slice(1) : path;
};

function getBreadcrumbItems(
  segmentKey: string,
  segments: string[],
  crumbs: BreadcrumbsConfig[]
): BreadcrumbItem[] {
  const element = crumbs.find((item) => clearPath(item.path) === segmentKey);

  if (!element) return [];

  const currentElement: BreadcrumbItem = {
    text: element.text,
    path: element.path,
  };

  if (
    segments.length === 0 ||
    !element.children ||
    element.children.length === 0
  ) {
    return [currentElement];
  }

  return [
    currentElement,
    ...getBreadcrumbItems(segments[0], segments.slice(1), element.children),
  ];
}

function createFullPaths(breadcrumbs: BreadcrumbItem[]): BreadcrumbItem[] {
  const withFullPaths: BreadcrumbItem[] = [];

  let accumulatedPath = "";

  breadcrumbs.forEach((item) => {
    if (item.path === "/") accumulatedPath = "";
    else accumulatedPath = `${accumulatedPath}${item.path}`;

    withFullPaths.push({
      text: item.text,
      path: accumulatedPath || item.path,
    });
  });

  return withFullPaths;
}

export function getBreadcrumbs(
  path: string,
  fullPaths = true,
  lastItem?: BreadcrumbItem
): BreadcrumbItem[] {
  const segments = path.split("/");
  const homeSegmentKey = "/";
  const breadcrumbs = getBreadcrumbItems(
    homeSegmentKey,
    segments.slice(1),
    breadcrumbsConfig
  );

  if (lastItem) breadcrumbs[breadcrumbs.length - 1] = lastItem;

  return fullPaths ? createFullPaths(breadcrumbs) : breadcrumbs;
}
