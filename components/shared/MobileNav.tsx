import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import menu from "@/public/assets/icons/menu.svg";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <Image src={menu} alt="menu icon" width={25} height={25} className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col md:hidden bg-white gap-6">
        <Image src="/assets/images/logo.svg" alt="log" width={128} height={38}/>
        <Separator className="border border-gray-50"/>
        <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
