import { ChevronLeft } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";
import Image from "next/image";
import Link from "next/link";
export const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/hamburger.svg" alt="menu button" width={35} height={35} />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="items-end">
          <SheetClose asChild>
            <ChevronLeft width={50} height={40} />
          </SheetClose>
        </SheetHeader>
        <section className="flex-1">
          <ul className="divide-y">
            <li className="py-4 text-2xl active:bg-white active:text-darkGray transition">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="py-4 text-2xl active:bg-white active:text-darkGray transition">
              <Link href="/saved">Saved</Link>
            </li>
            <li className="py-4 text-2xl active:bg-white active:text-darkGray transition">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </section>
        <SheetFooter className="text-center">
          &copy; Przymencki {new Date().getFullYear()}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
