import { ExploreArticleSection } from "@/components/Explore/ExploreArticleSection";
import { ExploreTabs } from "@/components/Explore/ExploreTabs";
import { Searchbar } from "@/components/Explore/Searchbar";
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
      <Searchbar />
      <ExploreTabs />
      <main>
        <ExploreArticleSection
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
        <ExploreArticleSection
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
      </main>
    </>
  );
};

export default ExploreCategory;
