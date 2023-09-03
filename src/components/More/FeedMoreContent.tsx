import { FetchHistories } from "../Feed/FetchHistories";

export const FeedMoreContent = ({ category }: { category: string }) => {
  return (
    <main className="space-y-4 pb-24 px-4 pt-4">
      <FetchHistories category={category} limit={10} />
    </main>
  );
};
