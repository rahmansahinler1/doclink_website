type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  previewImage: string;
  fullImage: string;
  author: Author;
  tags: string[];
  publishDate: string;
  slug: string;
  introText: string;
  content: string;
};