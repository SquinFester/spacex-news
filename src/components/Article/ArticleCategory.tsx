import { categoriesList } from "@/lib/categoriesList";

export const ArticleCategory = ({ category }: { category: string }) => {
  const currentCategory = categoriesList.find((c) => c.name === category);
  return (
    <section className="flex gap-2 max-w-2xl mx-auto">
      {currentCategory?.icon("#BDA6F5", 20, 20)}
      <h2 className="text-customPurple text-lg font-medium uppercase leading-none">
        {currentCategory?.name}
      </h2>
    </section>
  );
};
