"use client";

import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { graphQLClient } from "@/lib/graphql";
import { FechedLaunchesList, launchesQuery } from "./FetchMoreLaunches";
import { LinkToArticle } from "../Feed/LinkToArticle";
import { Loader2 } from "lucide-react";

type FetchLaunchesProps = InfiniteScrollProps & {
  initalLaunches: FechedLaunchesList;
};

export const FetchLaunches = ({
  category,
  limit,
  initalLaunches,
}: FetchLaunchesProps) => {
  const lastArticleRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching, isError } =
    useInfiniteQuery<FechedLaunchesList>({
      queryKey: ["infinite-launches"],
      queryFn: async ({ pageParam = limit }) =>
        graphQLClient.request(launchesQuery, {
          offset: pageParam,
          limit: pageParam + limit,
        }),
      getNextPageParam: (_, pages) => pages.length * limit,
      initialData: {
        pages: [initalLaunches],
        pageParams: [0],
      },
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
