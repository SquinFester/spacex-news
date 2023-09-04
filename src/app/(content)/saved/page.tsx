import { SavedContent } from "@/components/Saved/SavedContent";
import { getAuthSession } from "@/lib/auth";

const Saved = async () => {
  const session = await getAuthSession();

  return (
    <main className="px-4 py-6 space-y-4">
      <SavedContent isSession={!!session} />
    </main>
  );
};
export default Saved;
