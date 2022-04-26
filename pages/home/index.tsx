import { ConditionalRedirect } from "@fb/auth";
import { User } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-dark flex flex-col items-center justify-center py-12 px-16 w-full h-screen">
      <ConditionalRedirect
        cb={(user: User, ready: boolean) => {
          return !user && ready;
        }}
        path="/"
      />
      <div className="flex justify-end w-full h-1/3 items-center">
        <div className="text-primary w-auto px-12 text-center py-auto leading-25">
          <h1 className="text-xxl font-medium tracking-widest font-eb">WIT</h1>
          <h2 className="font-helvetica font-bold text-3xl">Table-top RPG</h2>
        </div>
      </div>
      <div className="w-full h-2/3 flex flex-col justify-center items-end gap-y-4">
        <h5 className="text-xl font-helvetica font-bold text-primary text-right">
          There’s no instance of a nation benefitting from prolonged warfare.
        </h5>
        <div className="w-full flex justify-between items-center gap-x-8 relative">
          <div
            onClick={() => router.push("/home/singleplayer")}
            className="cursor-pointer h-0 w-1/4 pb-1/4 border-2 border-semipink rounded-2xl flex flex-col items-center justify-center relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-8">
              <h5 className="font-eb text-primary font-semibold text-4xl">
                Singleplayer
              </h5>
              <Image
                src="/assets/images/singleplayer_icon.png"
                layout="intrinsic"
                width="160"
                height="160"
              />
            </div>
          </div>
          <div
            onClick={() => router.push("/home/multiplayer")}
            className="cursor-pointer h-0 w-1/4 pb-1/4 border-2 border-semipink rounded-2xl flex flex-col items-center justify-center relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-8">
              <h5 className="font-eb text-primary font-semibold text-4xl">
                Multiplayer
              </h5>
              <Image
                src="/assets/images/multiplayer_icon.png"
                layout="intrinsic"
                width="160"
                height="160"
              />
            </div>
          </div>
          <div
            onClick={() => router.push("/home/codex")}
            className="cursor-pointer h-0 w-1/4 pb-1/4 border-2 border-semipink rounded-2xl flex flex-col items-center justify-center relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-8">
              <h5 className="font-eb text-primary font-semibold text-4xl">
                Codex
              </h5>
              <Image
                src="/assets/images/codex_icon.png"
                layout="intrinsic"
                width="160"
                height="160"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/20 h-0 border-2 border-semipink pb-1/20 rounded-lg grid place-items-center relative">
            <div className="absolute inset-0 grid place-items-center">
              <Image
                src="/assets/images/settings_icon.png"
                width="40"
                height="40"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
