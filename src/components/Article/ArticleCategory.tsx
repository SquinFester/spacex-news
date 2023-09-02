import Image from "next/image";

export const ArticleCategory = ({ category }: { category: string }) => {
  return (
    <section className="flex gap-2 items-end">
      <Image
        src="/tech-icon.svg"
        alt="technology icon"
        width={18}
        height={18}
      />
      <h2 className="text-customPurple text-lg font-medium uppercase leading-none">
        {category}
      </h2>
    </section>
  );
};
