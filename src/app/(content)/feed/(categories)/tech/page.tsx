"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";

type History = {
  id: string;
  title: string;
};

type FechedData = {
  histories: History[];
};

const query = gql`
  query Histories($offset: Int, $limit: Int) {
    histories(offset: $offset, limit: $limit) {
      id
      title
    }
  }
`;

const Tech = () => {
  const lastArticleRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage } = useInfiniteQuery<FechedData>({
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
    <section className="overflow-y-scroll space-y-4 pb-20">
      {data ? (
        data?.pages.map((historiesList) =>
          historiesList.histories.map((history) => (
            <article key={history.id} ref={ref}>
              {history.title}
            </article>
          ))
        )
      ) : (
        <p></p>
      )}
    </section>
  );
};
export default Tech;
