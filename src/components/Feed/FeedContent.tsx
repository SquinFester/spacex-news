import Link from "next/link";
import { FetchHistories } from "./FetchHistories";

export const FeedContent = ({ category }: { category: string }) => {
  return (
    <section>
      <section className="flex justify-between items-center py-4">
        <h1 className="text-lg font-medium">Top Stories</h1>
        <Link
          href={`/more/feed/${category}`}
          className="text-sm text-lightGray"
        >
          See all
        </Link>
      </section>
      <section className="space-y-4 pb-20 ">
        <FetchHistories category={category} limit={5} />
      </section>
    </section>
  );
};
