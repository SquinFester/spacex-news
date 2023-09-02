import { ArticleCategory } from "@/components/Article/ArticleCategory";
import { ArticleContent } from "@/components/Article/ArticleContent";
import { ArticleMenu } from "@/components/Article/ArticleMenu";
import { categories } from "@/lib/categoriesList";
import { graphQLClient } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import { notFound } from "next/navigation";

type ArticleProps = {
  params: {
    category: string;
    articleId: string;
  };
};

type FechedData = {
  history: FechedHistory & {
    links: {
      article: string | null;
      reddit: string | null;
      wikipedia: string | null;
    };
    details: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const query = gql`
  query History($historyId: ID!) {
    history(id: $historyId) {
      id
      title
      event_date_utc
      details
      links {
        article
        reddit
        wikipedia
      }
    }
  }
`;

const Article = async ({ params: { category, articleId } }: ArticleProps) => {
  if (!categories.includes(category)) notFound();

  const { history } = await graphQLClient.request<FechedData>(query, {
    historyId: articleId,
  });

  const {
    title,
    details,
    event_date_utc,
    links: { article, reddit, wikipedia },
  } = history;

  return (
    <>
      <ArticleMenu />
      <div className="w-full h-[266px] overflow-hidden">
        <Image src="/google.png" alt="google image" width={400} height={266} />
      </div>
      <main className="px-4 py-6 space-y-4">
        <ArticleCategory category={category} />
        <ArticleContent
          title={title}
          details={details}
          date={new Date(event_date_utc)}
          article={article}
          reddit={reddit}
          wikipedia={wikipedia}
        />
      </main>
    </>
  );
};
export default Article;
