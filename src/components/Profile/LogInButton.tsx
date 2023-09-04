"use client";
import { Button } from "@/components/ui/Button";
import { signIn, signOut } from "next-auth/react";

export const LogInButton = ({ isLogged }: { isLogged: boolean }) => {
  const logIn = async () => {
    try {
      await signIn("google");
    } catch (error) {}
  };
  return (
    <Button
      onClick={isLogged ? () => signOut() : logIn}
      variant={"outline"}
      className="text-black w-full text-xl font-semibold"
    >
      {isLogged ? "Log Out" : "Log In"}
    </Button>
  );
};
