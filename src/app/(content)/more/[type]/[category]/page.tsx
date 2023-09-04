import { FetchHistories } from "@/components/Feed/FetchHistories";
import { FetchMoreLaunches } from "@/components/More/FetchMoreLaunches";
import { categories } from "@/lib/categoriesList";
import { notFound } from "next/navigation";

type MoreProps = {
  params: {
    type: string;
    category: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const More = ({ params: { type, category } }: MoreProps) => {
  if (!categories.includes(category)) notFound();
  if (type !== "feed" && type !== "explore") notFound();
  return (
    <main className="space-y-4 pb-24 px-4 pt-4">
      {type === "feed" && <FetchHistories category={category} limit={10} />}
      {type === "explore" && (
        <FetchMoreLaunches category={category} limit={10} />
      )}
    </main>
  );
};
export default More;
