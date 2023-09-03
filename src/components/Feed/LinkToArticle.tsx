import { format } from "date-fns";
import Link from "next/link";
import { SavedIcon, TripleDotsIcon } from "../Icons/Icons";

type LinkToArticleProps = {
  category: string;
  id: string;
  title: string;
  date: Date;
};

export const LinkToArticle = ({
  category,
  id,
  title,
  date,
}: LinkToArticleProps) => {
  return (
    <Link href={`/article/${category}/${id}`} className="space-y-4">
      <section className="flex gap-2">
        <div className="bg-lightGray rounded-md min-w-[85px] h-16" />
        <h1 className="text-lg">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h1>
      </section>
      <section className="flex justify-between items-center">
        <time className="text-xs text-lightGray">
          {format(date, "MMM dd, yyyy")} • {date.getDay()} min read
        </time>
        <div className="flex items-center">
          <SavedIcon width={20} height={20} color="#888888" />
          <TripleDotsIcon width={20} height={20} color="#888888" />
        </div>
      </section>
    </Link>
  );
};
