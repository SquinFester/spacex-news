import { ArticleCategory } from "@/components/Article/ArticleCategory";
import { ArticleContent } from "@/components/Article/ArticleContent";
import { graphQLClient } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import { ArticleMenu } from "./ArticleMenu";

type ArticleProps = {
  category: string;
  articleId: string;
};

type FechedData = {
  launch: FechedLaunch & {
    links: {
      article_link: string | null;
      reddit_media: string | null;
      wikipedia: string | null;
    };
    details: string;
  };
};

const query = gql`
  query Launch($launchId: ID!) {
    launch(id: $launchId) {
      id
      details
      mission_name
      launch_date_utc
      links {
        reddit_media
        wikipedia
        article_link
      }
    }
  }
`;

export const ExploreArticle = async ({ category, articleId }: ArticleProps) => {
  const { launch } = await graphQLClient.request<FechedData>(query, {
    launchId: articleId,
  });

  const {
    mission_name,
    details,
    launch_date_utc,
    links: { article_link, reddit_media, wikipedia },
  } = launch;

  return (
    <>
      <ArticleMenu
        category={category}
        articleId={articleId}
        type={"explore"}
        title={mission_name}
        date={launch_date_utc.toString()}
      />
      <div className="overflow-hidden mx-auto max-w-xl">
        <Image src="/google.png" alt="google image" width={400} height={266} />
      </div>
      <main className="px-4 py-6 space-y-4">
        <ArticleCategory category={category} />
        <ArticleContent
          title={mission_name}
          details={details}
          date={new Date(launch_date_utc)}
          article={article_link}
          reddit={reddit_media}
          wikipedia={wikipedia}
        />
      </main>
    </>
  );
};
