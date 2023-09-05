import { gql } from "graphql-request";
import { FetchLaunches } from "./FetchLaunches";
import { graphQLClient } from "@/lib/graphql";

export type FechedLaunchesList = {
  launches: FechedLaunch[];
};

export const launchesQuery = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_utc
    }
  }
`;

export const FetchMoreLaunches = async ({
  category,
  limit,
}: InfiniteScrollProps) => {
  const initalLaunches = await graphQLClient.request<FechedLaunchesList>(
    launchesQuery,
    {
      offset: 0,
      limit: limit,
    }
  );
  return (
    <section className="space-y-4 pb-20 ">
      <FetchLaunches
        category={category}
        limit={limit}
        initalLaunches={initalLaunches}
      />
    </section>
  );
};
