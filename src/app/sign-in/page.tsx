"use client";

import { signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const logIn = async () => {
    try {
      signIn("google");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={logIn}>SignIn</button>
      <button onClick={() => signOut()}>Signout</button>
    </>
  );
};
export default SignIn;
