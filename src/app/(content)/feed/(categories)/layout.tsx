import Image from "next/image";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="divide-y divide-lightGray/70 space-y-4 container py-4">
      <Image src="/dron.png" alt="dron" width={350} height={150} />
      <section>
        <section className="flex justify-between items-center py-4">
          <h1 className="text-lg font-medium">Top Stories</h1>
          <p className="text-sm text-lightGray">See all</p>
        </section>
        {children}
      </section>
    </main>
  );
};
export default CategoriesLayout;
