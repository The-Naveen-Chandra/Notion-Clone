"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon, X } from "lucide-react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useCoverImage } from "@/hooks/use-cover-image";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const CoverImage = ({ url, preview }: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }

    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && (
        <Image src={url} fill alt="Cover Image" className="object-cover" />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-80 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className=" text-muted-foreground text-xs"
            variant={"outline"}
            size={"sm"}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className=" text-muted-foreground text-xs"
            variant={"outline"}
            size={"sm"}
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

CoverImage.Skeleton = function CoverImageSkeleton() {
  return <Skeleton className="w-full h-[35vh]" />;
};
