import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center ga-x-2">
      <Image
        src={"/logo.svg"}
        height={"30"}
        width={"30"}
        alt="Notion Logo"
        className="dark:hidden mr-2"
      />
      <Image
        src={"/logo-dark.svg"}
        height={"30"}
        width={"30"}
        alt="Notion Logo"
        className="hidden dark:block mr-2"
      />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};
