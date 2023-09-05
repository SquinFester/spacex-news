import { format } from "date-fns";
import Link from "next/link";
import { TripleDotsIcon } from "../Icons/Icons";
import { SavedIconToggle } from "../Saved/SavedIconToggle";

type LinkToArticleProps = {
  category: string;
  id: string;
  title: string;
  date: Date;
  type: string;
};

export const LinkToArticle = ({
  category,
  id,
  title,
  date,
  type,
}: LinkToArticleProps) => {
  return (
    <Link href={`/article/${type}/${category}/${id}`} className="space-y-4">
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
        <div className="flex items-cente">
          <SavedIconToggle
            articleId={id}
            type={type}
            category={category}
            title={title}
            date={date.toDateString()}
            width={20}
            height={20}
            color="#888888"
          />
          <TripleDotsIcon width={20} height={20} color="#888888" />
        </div>
      </section>
    </Link>
  );
};
