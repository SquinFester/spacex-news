import { ExploreArticle } from "@/components/Article/ExploreArticle";
import { FeedArticle } from "@/components/Article/FeedArticle";
import { categories, typesList } from "@/lib/categoriesList";
import { notFound } from "next/navigation";

type ArticleProps = {
  params: {
    type: string;
    category: string;
    articleId: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const Article = async ({
  params: { type, category, articleId },
}: ArticleProps) => {
  if (!categories.includes(category)) notFound();
  if (!typesList.includes(type)) notFound();

  return (
    <>
      {type === "feed" && (
        <FeedArticle category={category} articleId={articleId} />
      )}
      {type === "explore" && (
        <ExploreArticle category={category} articleId={articleId} />
      )}
    </>
  );
};
export default Article;
