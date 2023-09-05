import { graphQLClient } from "@/lib/graphql";
import { gql } from "graphql-request";
import { FetchHistories } from "../Feed/FetchHistories";

export type FechedHistoriesList = {
  histories: FechedHistory[];
};

type FetchMoreHistoriesProps = {
  category: string;
  limit: number;
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

export const FetchMoreHistories = async ({
  category,
  limit,
}: FetchMoreHistoriesProps) => {
  const initalHistories = await graphQLClient.request<FechedHistoriesList>(
    historiesQuery,
    {
      offset: 0,
      limit: limit,
    }
  );
  return (
    <section className="space-y-4 pb-20 ">
      <FetchHistories
        category={category}
        limit={limit}
        initalHistories={initalHistories}
      />
    </section>
  );
};
