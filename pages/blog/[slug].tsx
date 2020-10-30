import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import Markdown from "react-markdown";
import {
  Layout,
  PageContent,
  PageMenu,
  PageTitle,
} from "../../components/Layout";
import { getArticle, getArticles, IArticle } from "../../lib/articles";
import styles from "../../styles/Blog.module.scss";

export const Post: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <Layout title={article.title}>
      <PageTitle>{article.title}</PageTitle>
      <PageContent>
        <PageMenu />
        <div className={styles.article}>
          <div className={styles.date}>
            Published on {format(new Date(article.date), "MMM do, yyyy")}
          </div>
          <Markdown>{article.content}</Markdown>
        </div>
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
