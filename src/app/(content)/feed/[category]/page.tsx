import { notFound } from "next/navigation";
import { categories } from "@/lib/categoriesList";
import { Header } from "@/components/Feed/Header";
import Image from "next/image";
import { FeedContent } from "@/components/Feed/FeedContent";

type FeedCategoryProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

const FeedCategory = ({ params: { category } }: FeedCategoryProps) => {
  if (!categories.includes(category)) notFound();

  return (
    <>
      <Header />
      <main className="divide-y divide-lightGray/70 space-y-4 container py-4">
        <Image
          src="/dron.png"
          alt="dron"
          width={400}
          height={150}
          className="mx-auto"
        />
        <FeedContent category={category} />
      </main>
    </>
  );
};
export default FeedCategory;
