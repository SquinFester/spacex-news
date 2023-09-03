import { ArticleSection } from "@/components/Explore/ArticleSection";
import { categories } from "@/lib/categoriesList";
import { notFound } from "next/navigation";

type ExploreCategoryProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const ExploreCategory = ({ params: { category } }: ExploreCategoryProps) => {
  if (!categories.includes(category)) notFound();

  return (
    <>
      <ArticleSection
        query="query Launches($limit: Int) {
      launches(limit: $limit) {
        id
        mission_name
        launch_date_utc
      }
    }"
        category={category}
        title="Recent News"
      />
      <ArticleSection
        query="query Launches($limit: Int) {
      launches(limit: $limit) {
        id
        mission_name
        launch_date_utc
      }
    }"
        category={category}
        title="Recommended"
      />
    </>
  );
};

export default ExploreCategory;
