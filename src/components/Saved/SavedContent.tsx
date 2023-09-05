import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SavedScroll } from "./SavedScroll";

export const SavedContent = async () => {
  const session = await getAuthSession();
  const initalSaved = await db.article.findMany({
    where: {
      userId: session?.user.id,
    },
    take: 10,
  });

  return (
    <section className="space-y-4 pb-20 ">
      <SavedScroll initalSaved={initalSaved} />
    </section>
  );
};
