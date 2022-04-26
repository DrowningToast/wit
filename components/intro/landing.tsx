import React, { useState } from "react";
import { useAtom } from "jotai";
import { firebaseUserAtom } from "@jotai/store";
import Signin from "./signin";
import Signup from "./signup";
import IntroSubtitle from "./subtitle";
import { User } from "firebase/auth";

const Landing: React.FC = () => {
  const [state, setState] = useState<"signin" | "signup" | null>(null);

  const [user] = useAtom<User | null>(firebaseUserAtom);
  return (
    <section
      className={`h-screen w-full bg-dark flex flex-col justify-around items-center ${
        state || user ? "" : "pt-32"
      }`}
    >
      <div className="flex flex-col items-center text-primary leading-25 text-center">
        <h1 className="font-eb font-medium text-xxl tracking-widest">WIT</h1>
        <h2 className="font-helvetica text-2xl">Table-top RPG</h2>
      </div>
      <div className="flex-col flex gap-y-2 items-center justify-center">
        {/* Intro */}
        {!state && !user && (
          <>
            <div
              onClick={() => setState("signup")}
              className="cursor-pointer font-bold border-2 px-28 py-3 rounded-xl border-primary font-helvetica text-secondary text-2xl"
            >
              Sign up
            </div>
            <h5 className="text-witpink font-helvetica text-center text-sm">
              Already have an account?{" "}
              <span
                onClick={() => setState("signin")}
                className="text-secondary cursor-pointer"
              >
                Sign in
              </span>
            </h5>
          </>
        )}
        {!user && (
          <>
            <Signin state={state} setState={setState} />
            <Signup state={state} setState={setState} />
          </>
        )}
        <IntroSubtitle user={user} />
      </div>
    </section>
  );
};

export default Landing;
