export interface PageContent {
  html: string;
}

export interface PageData {
  id: string;
  title: string;
  authorId: string;
  content: PageContent;
  published: boolean;
}
