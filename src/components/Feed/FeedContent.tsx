import Link from "next/link";
import { FetchMoreHistories } from "../More/FetchMoreHistories";

export const FeedContent = async ({ category }: { category: string }) => {
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
      <FetchMoreHistories category={category} limit={5} />
    </section>
  );
};
