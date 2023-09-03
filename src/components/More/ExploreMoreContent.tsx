import { FetchMoreLaunches } from "./FetchMoreLaunches";

export const ExploreMoreContent = ({ category }: { category: string }) => {
  return (
    <main className="space-y-4 pb-24 px-4 pt-4">
      <FetchMoreLaunches category={category} limit={10} />
    </main>
  );
};
