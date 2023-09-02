"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { graphQLClient } from "@/lib/graphql";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categoriesList";
import { LinkToArticle } from "@/components/Feed/LinkToArticle";

type FeedCategoryProps = {
  params: {
    category: string;
  };
};

type FechedData = {
  histories: FechedHistory[];
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const query = gql`
  query Histories($offset: Int, $limit: Int) {
    histories(offset: $offset, limit: $limit) {
      id
      title
      event_date_utc
    }
  }
`;

const FeedCategory = ({ params: { category } }: FeedCategoryProps) => {
  if (!categories.includes(category)) notFound();

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
      {data &&
        data?.pages.map((historiesList) =>
          historiesList.histories.map((history) => (
            <article
              key={history.id}
              ref={ref}
              className="bg-secondDark rounded-md p-2"
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
    </section>
  );
};
export default FeedCategory;
