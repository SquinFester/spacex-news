import { FetchMoreHistories } from "@/components/More/FetchMoreHistories";
import { FetchMoreLaunches } from "@/components/More/FetchMoreLaunches";
import { categories, typesList } from "@/lib/categoriesList";
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
  if (!typesList.includes(type)) notFound();
  return (
    <main className="px-4 pt-4">
      {type === "feed" && <FetchMoreHistories category={category} limit={10} />}
      {type === "explore" && (
        <FetchMoreLaunches category={category} limit={10} />
      )}
    </main>
  );
};
export default More;
