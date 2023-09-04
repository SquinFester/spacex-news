"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TextIcon, TripleDotsIcon } from "../Icons/Icons";
import { SavedIconToggle } from "../Saved/SavedIconToggle";

type ArticleMenuProps = {
  type: string;
  category: string;
  articleId: string;
  title: string;
  date: string;
};

export const ArticleMenu = ({
  type,
  category,
  articleId,
  title,
  date,
}: ArticleMenuProps) => {
  const { back } = useRouter();

  return (
    <header className="flex justify-between items-center py-3 px-4 max-w-5xl mx-auto">
      <nav>
        <ChevronLeft
          width={30}
          height={30}
          onClick={back}
          className="cursor-pointer"
        />
      </nav>
      <section className="flex justify-between items-center gap-4">
        <TextIcon width={30} height={30} />

        <SavedIconToggle
          articleId={articleId}
          type={type}
          category={category}
          title={title}
          date={date}
          width={25}
          height={25}
          color=""
        />

        <TripleDotsIcon width={25} height={25} />
      </section>
    </header>
  );
};
