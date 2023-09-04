import { ExploreArticle } from "@/components/Article/ExploreArticle";
import { FeedArticle } from "@/components/Article/FeedArticle";
import { getAuthSession } from "@/lib/auth";
import { categories, typesList } from "@/lib/categoriesList";
import { db } from "@/lib/db";
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
  const session = await getAuthSession();

  const isSaved = !!(await db.article.findFirst({
    where: {
      id: articleId,
      userId: session?.user.id,
    },
  }));

  return (
    <>
      {type === "feed" && (
        <FeedArticle
          category={category}
          articleId={articleId}
          isSaved={isSaved}
        />
      )}
      {type === "explore" && (
        <ExploreArticle
          category={category}
          articleId={articleId}
          isSaved={isSaved}
        />
      )}
    </>
  );
};
export default Article;
