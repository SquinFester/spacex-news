import Link from "next/link";
import { FetchHistories } from "./FetchHistories";
import { gql } from "graphql-request";
import { graphQLClient } from "@/lib/graphql";

export type FechedHistoriesList = {
  histories: FechedHistory[];
};

export const historiesQuery = gql`
  query Histories($offset: Int, $limit: Int) {
    histories(offset: $offset, limit: $limit) {
      id
      title
      event_date_utc
    }
  }
`;

export const FeedContent = async ({ category }: { category: string }) => {
  const initalHistories = await graphQLClient.request<FechedHistoriesList>(
    historiesQuery,
    {
      offset: 0,
      limit: 5,
    }
  );

  return (
    <section>
      <section className="flex justify-between items-center py-4">
        <h1 className="text-lg font-medium">Top Stories</h1>
        <Link
          href={`/more/feed/${category}`}
          className="text-sm text-lightGray"
        >
          See all
        </Link>
      </section>
      <section className="space-y-4 pb-20 ">
        <FetchHistories
          category={category}
          limit={5}
          initalHistories={initalHistories}
        />
      </section>
    </section>
  );
};
