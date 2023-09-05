"use client";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/lib/useToast";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const LogInButton = ({ isLogged }: { isLogged: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const logIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    }
    setIsLoading(false);
  };
  return (
    <Button
      onClick={isLogged ? () => signOut() : logIn}
      variant={"outline"}
      className="text-black w-full text-xl font-semibold max-w-xs mx-auto"
      isLoading={isLoading}
    >
      {isLogged ? (
        "Log out"
      ) : (
        <>
          {!isLoading && (
            <Image
              src="/google-icon.svg"
              alt="google icon"
              width={24}
              height={24}
              className="mr-4"
            />
          )}
          Log in by Google
        </>
      )}
    </Button>
  );
};
