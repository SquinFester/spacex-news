"use client";

import { graphQLClient } from "@/lib/graphql";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { LinkToArticle } from "../Feed/LinkToArticle";

type FechedData = {
  histories: FechedHistory[];
};

const query = gql`
  query Histories($offset: Int, $limit: Int) {
    histories(offset: $offset, limit: $limit) {
      id
      title
      event_date_utc
    }
  }
`;

export const FetchHistories = ({ category, limit }: InfiniteScrollProps) => {
  const lastArticleRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching, isError } =
    useInfiniteQuery<FechedData>({
      queryKey: ["infinite-query"],
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
      {data &&
        data?.pages.map((historiesList) =>
          historiesList.histories.map((history) => (
            <article
              key={history.id}
              ref={ref}
              className="bg-secondDark rounded-md focus:bg-secondLightGray/70 hover:bg-secondLightGray/70 transition p-2"
            >
              <LinkToArticle
                category={category}
                id={history.id}
                title={history.title}
                date={new Date(history.event_date_utc)}
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
