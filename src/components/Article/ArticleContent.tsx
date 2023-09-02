import { format } from "date-fns";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ArticleContentProps = {
  title: string;
  date: Date;
  article: string | null;
  reddit: string | null;
  wikipedia: string | null;
  details: string;
};

export const ArticleContent = ({
  title,
  date,
  article,
  reddit,
  wikipedia,
  details,
}: ArticleContentProps) => {
  return (
    <article className="space-y-2">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <time className="text-xs text-lightGray">
        {date.getDay()} min read • {format(date, "MMM dd, yyyy, pppp")}
      </time>
      <section className="flex gap-6 pt-2">
        {reddit && (
          <Link href={reddit} target="_blank">
            <Image
              src="/reddit-icon.svg"
              alt="reddit logo"
              width={24}
              height={24}
            />
          </Link>
        )}
        {wikipedia && (
          <Link href={wikipedia} target="_blank">
            <Image
              src="/wikipedia-icon.svg"
              alt="wikipedia logo"
              width={24}
              height={24}
            />
          </Link>
        )}
        {article && (
          <Link href={article} target="_blank">
            <LinkIcon className="text-white/70" />
          </Link>
        )}
      </section>
      <p className="pt-3 text-white/70">{details}</p>
    </article>
  );
};
