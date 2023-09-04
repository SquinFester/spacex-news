"use client";

import { graphQLClient } from "@/lib/graphql";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { LinkToArticle } from "../Feed/LinkToArticle";
import { FechedHistoriesList, historiesQuery } from "./FeedContent";

type FetchHistoriesProps = InfiniteScrollProps & {
  initalHistories: FechedHistoriesList;
};

export const FetchHistories = ({
  category,
  limit,
  initalHistories,
}: FetchHistoriesProps) => {
  const lastArticleRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching, isError } =
    useInfiniteQuery<FechedHistoriesList>({
      queryKey: ["infinite-histories"],
      queryFn: async ({ pageParam = 1 }) =>
        graphQLClient.request(historiesQuery, {
          offset: pageParam,
          limit: pageParam + limit,
        }),
      getNextPageParam: (_, pages) => pages.length * limit,
      initialData: {
        pages: [initalHistories],
        pageParams: [1],
      },
    });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <>
      {data?.pages[0].histories &&
        data?.pages.map((page) =>
          page.histories.map((history) => (
            <article
              key={history.id}
              ref={ref}
              className="bg-secondDark rounded-md focus:bg-secondLightGray/70 hover:bg-secondLightGray/70 transition p-2  max-w-5xl mx-auto"
            >
              <LinkToArticle
                category={category}
                id={history.id}
                title={history.title}
                date={new Date(history.event_date_utc)}
                type="feed"
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
