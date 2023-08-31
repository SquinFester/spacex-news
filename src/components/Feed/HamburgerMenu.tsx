import { Button } from "@/components/ui/Button";
import { MoveLeft } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";
import Image from "next/image";
export const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/hamburger.svg" alt="menu button" width={35} height={35} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="items-end">
          <SheetClose asChild>
            <Button variant="secondary" className="w-20">
              <MoveLeft width={35} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <section>
          <ul>
            <li>Search</li>
            <li>Saved</li>
            <li>Profile</li>
          </ul>
        </section>
        <SheetFooter>&copy; Przymencki {new Date().getFullYear()}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
