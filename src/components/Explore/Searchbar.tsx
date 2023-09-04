import { Input } from "../ui/Input";
import { Search } from "lucide-react";

export const Searchbar = () => {
  return (
    <section className="px-4 pt-6 max-w-xl mx-auto">
      <div className="relative">
        <Input
          placeholder="Search for News"
          className="bg-secondLightGray placeholder:text-lightGray border-secondLightGray pl-12 py-6 text-base rounded-xl"
        />
        <div className="absolute top-0 left-0 h-full w-12 flex items-center justify-center">
          <Search className="w-10 text-lightGray" />
        </div>
      </div>
    </section>
  );
};
