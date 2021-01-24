import { format } from "date-fns";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Markdown from "react-markdown";
import {
  Layout,
  PageCloser,
  PageContent,
  PageMenu,
  PageTitle,
} from "../../components/Layout";
import { getArticle, getArticles, IArticle } from "../../lib/articles";
import styles from "../../styles/Blog.module.scss";

export const Post: React.FC<{ article: IArticle }> = ({ article }) => {
  const content = article.content.split("\n\n");

  return (
    <Layout title={article.title}>
      <PageCloser closeRoute="/blog" />
      <PageTitle layoutId={article.slug}>{article.title}</PageTitle>
      <PageContent>
        <PageMenu />
        <motion.div
          layoutId="article"
          className={styles.article}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.date}>
            Published on {format(new Date(article.date), "MMM do, yyyy")}
          </div>
          {content.map((paragraph, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              <Markdown>{paragraph}</Markdown>
            </motion.div>
          ))}
        </motion.div>
      </PageContent>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const article = await getArticle(ctx.params.slug.toString());
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const articles = await getArticles();
  return {
    paths: articles.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export default Post;
