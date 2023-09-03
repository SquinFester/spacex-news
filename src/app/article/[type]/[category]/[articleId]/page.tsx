import { ExploreArticle } from "@/components/Article/ExploreArticle";
import { FeedArticle } from "@/components/Article/FeedArticle";
import { categories } from "@/lib/categoriesList";
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

  if (type === "feed")
    return <FeedArticle category={category} articleId={articleId} />;
  else if (type === "explore")
    return <ExploreArticle category={category} articleId={articleId} />;
  else notFound();
};
export default Article;
