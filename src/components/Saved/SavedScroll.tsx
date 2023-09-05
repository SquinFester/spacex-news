"use client";

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import { LinkToArticle } from "../Feed/LinkToArticle";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

type FechedArticle = {
  id: string;
  type: string;
  title: string;
  date: Date;
  category: string;
};

export const SavedScroll = ({
  initalSaved,
}: {
  initalSaved: FechedArticle[];
}) => {
  const lastArticleRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { ref, entry } = useIntersection({
    root: lastArticleRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetching, isError } = useInfiniteQuery({
    queryKey: ["infinite-saved"],
    queryFn: async ({ pageParam = 2 }) => {
      const query = `/api/get-saved?page=${pageParam}&limit=10`;
      const { data } = await axios.get(query);
      return data as FechedArticle[];
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    initialData: {
      pages: [initalSaved],
      pageParams: [1],
    },
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, pathname]);

  return (
    <>
      {data?.pages.map((page) =>
        page.map((article) => (
          <article
            key={article.id}
            ref={ref}
            className="bg-secondDark rounded-md focus:bg-secondLightGray/70 hover:bg-secondLightGray/70 transition p-2   max-w-5xl mx-auto"
          >
            <LinkToArticle
              category={article.category}
              id={article.id}
              title={article.title}
              date={new Date(article.date)}
              type={article.type}
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
      {!data?.pages[0].length && !isError && !isFetching && (
        <p className="text-center text-sm">The list is empty</p>
      )}
    </>
  );
};
