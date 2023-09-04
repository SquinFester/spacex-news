"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { SavedIcon, TextIcon, TripleDotsIcon } from "../Icons/Icons";
import axios from "axios";
import { useState } from "react";

type ArticleMenuProps = {
  type: string;
  category: string;
  articleId: string;
  title: string;
  date: string;
  isSaved: boolean;
};

export const ArticleMenu = ({
  type,
  category,
  articleId,
  title,
  date,
  isSaved,
}: ArticleMenuProps) => {
  const [saved, setSaved] = useState(isSaved);

  const { back } = useRouter();
  const saveToogle = async () => {
    await axios.post("/api/save-toggle", {
      id: articleId,
      type,
      category,
      articleId,
      title,
      date,
    });
    setSaved((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center py-3 px-4">
      <nav>
        <ChevronLeft width={30} height={30} onClick={back} />
      </nav>
      <section className="flex justify-between items-center gap-4">
        <TextIcon width={30} height={30} />
        <button onClick={saveToogle}>
          <SavedIcon width={25} height={25} color={saved ? "yellow" : ""} />
        </button>
        <TripleDotsIcon width={25} height={25} />
      </section>
    </header>
  );
};
