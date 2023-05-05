import type { Article } from "~/features/articles/types";
import { sleep } from "~/utils/sleep";

const lorem: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const articles: Article[] = [
  {
    id: "1",
    title: "Article 1",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    title: "Article 2",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://media.istockphoto.com/id/496700224/fr/photo/filles-de-prendre-une-photo-de-mer-avec-une-cam%C3%A9ra-de-cin%C3%A9ma.jpg?s=170667a&w=0&k=20&c=GIuucvYmgFIO4MIwKP5q4q9K2FCgZKN9kJq9bydghJ4=",
  },
  {
    id: "1",
    title: "Article 1",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    title: "Article 2",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://media.istockphoto.com/id/496700224/fr/photo/filles-de-prendre-une-photo-de-mer-avec-une-cam%C3%A9ra-de-cin%C3%A9ma.jpg?s=170667a&w=0&k=20&c=GIuucvYmgFIO4MIwKP5q4q9K2FCgZKN9kJq9bydghJ4=",
  },
  {
    id: "1",
    title: "Article 1",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    title: "Article 2",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://media.istockphoto.com/id/496700224/fr/photo/filles-de-prendre-une-photo-de-mer-avec-une-cam%C3%A9ra-de-cin%C3%A9ma.jpg?s=170667a&w=0&k=20&c=GIuucvYmgFIO4MIwKP5q4q9K2FCgZKN9kJq9bydghJ4=",
  },
  {
    id: "1",
    title: "Article 1",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    title: "Article 2",
    description: lorem,
    body: lorem,
    tagList: ["tag1", "tag2"],
    cover:
      "https://media.istockphoto.com/id/496700224/fr/photo/filles-de-prendre-une-photo-de-mer-avec-une-cam%C3%A9ra-de-cin%C3%A9ma.jpg?s=170667a&w=0&k=20&c=GIuucvYmgFIO4MIwKP5q4q9K2FCgZKN9kJq9bydghJ4=",
  },
];
async function getArticles(
  _categoryId: string | undefined = "all",
  limit = 20
) {
  await sleep(250);

  return articles.slice(0, limit);
}

async function getArticlesByTag(_tag: string, _limit = 20) {
  await sleep(250);

  return articles;
}

async function getArticle(id: string) {
  await sleep(250);

  return articles.find((article) => article.id === id);
}

export const articlesService = {
  getArticles,
  getArticlesByTag,
  getArticle,
};
