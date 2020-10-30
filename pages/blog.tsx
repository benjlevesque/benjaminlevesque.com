import { format } from "date-fns";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import React from "react";
import { Layout, PageContent, PageMenu, PageTitle } from "../components/Layout";
import { getArticles, IArticle } from "../lib/articles";
import styles from "../styles/Blog.module.scss";

interface IProps {
  articles: IArticle[];
}

const Article = ({ article }: { article: IArticle }) => {
  return (
    <NextLink href={`/blog/${article.slug}`}>
      <a className={styles.articleItem}>
        <h2 className={styles.title}>{article.title}</h2>
        <span>{format(new Date(article.date), "MMM do, yyyy")}</span>
      </a>
    </NextLink>
  );
};

const Blog = ({ articles }: IProps) => {
  return (
    <Layout title="Benjamin's blog">
      <PageTitle>Benjamin's Blog</PageTitle>
      <PageContent>
        <PageMenu />
        <div className={styles.articleList}>
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </PageContent>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const articles = await getArticles();
  return {
    props: {
      articles,
    },
  };
};

export default Blog;
