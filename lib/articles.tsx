import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";
import { compareDesc } from "date-fns";

export interface IArticle {
  slug: string;
  title: string;
  content: string;
  date: string;
}

let articles: IArticle[];

const loadArticles = async (): Promise<IArticle[]> => {
  console.log("loading articles...");
  const postsPath = path.resolve(process.cwd(), "posts");
  const articles = await fs.readdir(postsPath);
  return articles
    .filter((a) => path.extname(a) === ".md")
    .map((name) => {
      const { data, content } = matter.read(path.join(postsPath, name));
      if (!data.title) return null;
      return {
        slug: name.substring(0, name.lastIndexOf(".")),
        content: content,
        title: data.title,
        date: new Date(data.date).toISOString(),
      };
    })
    .filter(Boolean)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};

export const getArticles = async (): Promise<IArticle[]> => {
  if (!articles) {
    articles = await loadArticles();
  }
  return articles;
};

export const getArticle = async (slug: string): Promise<IArticle> => {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
};
