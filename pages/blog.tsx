import { format } from "date-fns";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Layout, PageContent, PageMenu, PageTitle } from "../components/Layout";
import { getArticles, IArticle } from "../lib/articles";
import { useKeyboardNavigation } from "../lib/useKeyboardNavigation";
import styles from "../styles/Blog.module.scss";

interface IProps {
  articles: IArticle[];
}

const Article: React.FC<{ article: IArticle; active?: boolean }> = ({
  article,
  active,
}) => {
  return (
    <NextLink href={`/blog/${article.slug}`}>
      <a
        className={[
          styles.articleItem,
          active ? styles.active : undefined,
        ].join(" ")}
      >
        <motion.h2 layoutId={article.slug} className={styles.title}>
          {article.title}
        </motion.h2>
        <span>{format(new Date(article.date), "MMM do, yyyy")}</span>
      </a>
    </NextLink>
  );
};

const Blog = ({ articles }: IProps) => {
  const router = useRouter();
  const currentItem = useKeyboardNavigation(articles.length, (index) => {
    const article = articles[index];
    if (article) {
      router.push(`/blog/${article.slug}`);
    }
  });
  return (
    <Layout title="Benjamin's blog">
      <PageTitle layoutId="title">Benjamin's Blog</PageTitle>
      <PageContent>
        <PageMenu />
        <div className={styles.articleList}>
          {articles.map((article, i) => (
            <Article
              key={article.slug}
              article={article}
              active={currentItem === i}
            />
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
