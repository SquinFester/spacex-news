"use client";

import { MouseEvent, useState } from "react";
import { SavedIcon } from "../Icons/Icons";
import axios, { AxiosError } from "axios";
import { useToast } from "@/lib/useToast";
import { ToastAction } from "@radix-ui/react-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/Button";
type SavedToggleProps = {
  type: string;
  category: string;
  articleId: string;
  title: string;
  date: string;
  color: string;
  width: number;
  height: number;
};

export const SavedIconToggle = ({
  type,
  category,
  articleId,
  title,
  date,
  color,
  width,
  height,
}: SavedToggleProps) => {
  const { toast } = useToast();
  const saveToogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/save-toggle", {
        id: articleId,
        type,
        category,
        title,
        date,
      });
      toast({
        title:
          data === "added"
            ? "Added to saved articles"
            : "Removed from saved articles",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast({
            title: "Something went wrong.",
            description: "You must be logged in to save article.",
            action: (
              <ToastAction altText="Log in">
                <Link
                  href="/profile"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "font-medium"
                  )}
                >
                  Log In
                </Link>
              </ToastAction>
            ),
          });
        }
      }
    }
  };
  return (
    <button onClick={(e) => saveToogle(e)} aria-label="save article">
      <SavedIcon width={width} height={height} color={color} />
    </button>
  );
};
