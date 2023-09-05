import { ArticleCategory } from "@/components/Article/ArticleCategory";
import { ArticleContent } from "@/components/Article/ArticleContent";
import { graphQLClient } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import { ArticleMenu } from "./ArticleMenu";

type FeedArticleProps = {
  category: string;
  articleId: string;
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

export const FeedArticle = async ({
  category,
  articleId,
}: FeedArticleProps) => {
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
      <ArticleMenu
        category={category}
        articleId={articleId}
        type={"feed"}
        title={title}
        date={event_date_utc.toString()}
      />
      <div className="overflow-hidden mx-auto max-w-xl">
        <Image
          src="/google.png"
          alt="google image"
          width={400}
          height={266}
          className="mx-auto"
        />
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
