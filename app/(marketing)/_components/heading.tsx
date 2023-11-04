"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion free
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
