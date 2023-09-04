"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  const logIn = async () => {
    try {
      signIn("google");
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={logIn}>SignIn</button>;
};
export default SignIn;
