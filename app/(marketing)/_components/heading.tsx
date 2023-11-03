"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        {/* Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span> */}
        Your📕<span className="underline">wiki</span>,📑
        <span className="underline">docs</span>, &
        <br /> 🎯
        <span className="underline">projects</span>. Together.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium p-2">
        Notion is the connected workspace where
        <br />
        better, faster work happens. Now with AI✨
      </h3>
      <Button>
        Enter Notion
        <ArrowRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
