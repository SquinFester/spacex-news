"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { Loader2 } from "lucide-react";

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

const Tech = () => {
  const lastArticleRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching } = useInfiniteQuery<FechedData>({
    queryKey: ["infinite-query"],
    queryFn: async ({ pageParam = 0 }) =>
      request("https://spacex-production.up.railway.app/", query, {
        offset: pageParam,
        limit: pageParam + 5,
      }),
    getNextPageParam: (_, pages) => pages.length * 5,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <section className="space-y-4 pb-20 ">
      {data
        ? data?.pages.map((historiesList) =>
            historiesList.histories.map((history) => (
              <article
                key={history.id}
                ref={ref}
                className="bg-secondDark rounded-md p-2"
              >
                <Link href={`/article/${history.id}`} className="space-y-4">
                  <section className="flex gap-2">
                    <div className="bg-lightGray rounded-md w-20 h-16" />
                    <h1 className="text-lg">
                      {history.title.length > 45
                        ? `${history.title.substring(0, 45)}...`
                        : history.title}
                    </h1>
                  </section>
                  <p className="text-xs text-lightGray">
                    {format(new Date(history.event_date_utc), "MMM dd, yyyy")} •{" "}
                    {new Date(history.event_date_utc).getDay()} min read
                  </p>
                </Link>
              </article>
            ))
          )
        : null}
      {isFetching && (
        <Loader2 className="w-6 h-6 text-lightGray mx-auto animate-spin" />
      )}
    </section>
  );
};
export default Tech;
