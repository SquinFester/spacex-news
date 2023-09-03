import { format } from "date-fns";
import Link from "next/link";
import { SavedIcon } from "../Icons/Icons";

type ArticlePreviewProps = {
  category: string;
  id: string;
  title: string;
  date: Date;
};

export const ArticlePreview = ({
  category,
  id,
  title,
  date,
}: ArticlePreviewProps) => {
  return (
    <article className="p-2 rounded-md bg-darkGray focus:bg-darkGray/70 hover:bg-secondLightGray/70">
      <Link href={`/article/explore/${category}/${id}`} className="space-y-2">
        <div className="w-[166px] h-[104px] bg-lightGray rounded-md" />
        <p className="text-sm text-lightGray">{date.getDay()} min • read</p>

        <h2 className="text-lg leading-none">
          {title.length > 16 ? `${title.substring(0, 16)}...` : title}
        </h2>

        <section className="flex justify-between items-center">
          <time className="text-sm text-lightGray">
            {format(date, "MMM dd, yyyy")}
          </time>
          <SavedIcon color="#888888" width={20} />
        </section>
      </Link>
    </article>
  );
};
