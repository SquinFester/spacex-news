"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { SavedIcon, TextIcon, TripleDotsIcon } from "../Icons/Icons";

export const ArticleMenu = () => {
  const { back } = useRouter();
  return (
    <header className="flex justify-between items-center py-3 px-4">
      <nav>
        <ChevronLeft width={30} height={30} onClick={back} />
      </nav>
      <section className="flex justify-between items-center gap-4">
        <TextIcon width={30} height={30} />
        <SavedIcon width={25} height={25} />
        <TripleDotsIcon width={25} height={25} />
      </section>
    </header>
  );
};
