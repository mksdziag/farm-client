import { sleep } from "~/utils/sleep";

import type { PageData } from "./types";

async function getPage(id: string) {
  await sleep(250);

  const details: PageData = {
    id: id,
    title: `Title of this page- ${id}`,
    authorId: "1",
    content: {
      html: `Content of this page - ${id}`,
    },
    published: true,
  };

  return details;
}

export const pagesService = {
  getPage,
};
