import { ExploreMoreContent } from "@/components/More/ExploreMoreContent";
import { FeedMoreContent } from "@/components/More/FeedMoreContent";
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
  if (type === "feed") return <FeedMoreContent category={category} />;
  else if (type === "explore")
    return <ExploreMoreContent category={category} />;
  else notFound();
};
export default More;
