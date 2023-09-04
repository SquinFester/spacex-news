"use client";

import { graphQLClient } from "@/lib/graphql";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { LinkToArticle } from "../Feed/LinkToArticle";

type FechedData = {
  launches: FechedLaunch[];
};

const query = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_utc
    }
  }
`;

export const FetchMoreLaunches = ({ category, limit }: InfiniteScrollProps) => {
  const lastArticleRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching, isError } =
    useInfiniteQuery<FechedData>({
      queryKey: ["infinite-launches"],
      queryFn: async ({ pageParam = 0 }) =>
        graphQLClient.request(query, {
          offset: pageParam,
          limit: pageParam + limit,
        }),
      getNextPageParam: (_, pages) => pages.length * limit,
    });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <>
      {data?.pages[0].launches &&
        data?.pages.map((page) =>
          page.launches.map((launch) => (
            <article
              key={launch.id}
              ref={ref}
              className="bg-secondDark rounded-md focus:bg-secondLightGray/70 hover:bg-secondLightGray/70 transition p-2  max-w-5xl mx-auto"
            >
              <LinkToArticle
                category={category}
                id={launch.id}
                title={launch.mission_name}
                date={new Date(launch.launch_date_utc)}
                type="explore"
              />
            </article>
          ))
        )}
      {isFetching && (
        <Loader2 className="w-6 h-6 text-lightGray mx-auto animate-spin" />
      )}
      {isError && (
        <p className="text-center text-sm">
          Sorry, something went wrong. Try again later.
        </p>
      )}
    </>
  );
};
