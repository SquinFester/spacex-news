type ArticleProsp = {
  params: {
    articleId: string;
  };
};

const Article = ({ params: { articleId } }: ArticleProsp) => {
  return <div>{articleId}</div>;
};
export default Article;
