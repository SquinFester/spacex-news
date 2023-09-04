import { graphQLClient } from "@/lib/graphql";
import { ArticlePreview } from "./ArticlePreview";
import Link from "next/link";

type ArticleSectionProps = {
  query: string;
  category: string;
  title: string;
};

type FechedData = {
  launches: FechedLaunch[];
};

export const ExploreArticleSection = async ({
  query,
  category,
  title,
}: ArticleSectionProps) => {
  const { launches } = await graphQLClient.request<FechedData>(query, {
    limit: 5,
  });

  return (
    <>
      <section className="flex justify-between my-4 px-4 items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Link
          href={`/more/explore/${category}`}
          className="text-sm text-lightGray"
        >
          View more
        </Link>
      </section>
      <section className="pb-10 flex overflow-x-auto gap-6 items-center justify-between px-4">
        {launches.map((launch) => (
          <ArticlePreview
            key={launch.id}
            id={launch.id}
            category={category}
            title={launch.mission_name}
            date={new Date(launch.launch_date_utc)}
          />
        ))}
      </section>
    </>
  );
};
