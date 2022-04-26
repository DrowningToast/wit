import { useRouter } from "next/router";
import { useState } from "react";

const Singleplayer: React.FC = () => {
  const router = useRouter();
  const [viewing, setView] = useState<"arcade" | "dojo" | "tutorial" | null>(
    "arcade"
  );

  return (
    <section className="bg-dark flex flex-col items-center justify-center py-12 px-16 w-full h-screen">
      <div className="flex justify-end w-full h-1/4 items-center">
        <div className="text-primary w-auto px-12 text-center py-auto leading-25">
          <h1 className="text-xxl2 font-medium font-eb">Singleplayer</h1>
        </div>
      </div>
      <div className="w-full h-3/4 grid grid-cols-3 grid-rows-4 gap-y-7 gap-x-16">
        <div
          onMouseEnter={() => setView("arcade")}
          className={`w-full h-full border-4 rounded-xl border-witpink hover:border-secondary grid place-items-center row-start-1 cursor-pointer`}
        >
          <h1 className="text-6xl font-eb font-semibold text-primary text-center">
            Arcade
          </h1>
        </div>
        <div
          onMouseEnter={() => setView("dojo")}
          className={`w-full h-full border-4 rounded-xl border-witpink hover:border-secondary grid place-items-center row-start-2 cursor-pointer`}
        >
          <h1 className="text-6xl font-eb font-semibold text-primary text-center">
            Dojo
          </h1>
        </div>
        <div
          onMouseEnter={() => setView("tutorial")}
          className={`w-full h-full border-4 rounded-xl border-witpink hover:border-secondary grid place-items-center row-start-3  cursor-pointer`}
        >
          <h1 className="text-6xl font-eb font-semibold text-primary text-center">
            Tutorial
          </h1>
        </div>
        <div
          onClick={() => router.push("/home")}
          className={`w-full h-full border-4 rounded-xl border-witpink hover:border-secondary grid place-items-center row-start-4  cursor-pointer`}
        >
          <h1 className="text-6xl font-eb font-semibold text-primary text-center">
            Return
          </h1>
        </div>
        <div className="col-span-2 row-span-4 rounded-2xl border-4 border-witpink pl-12 py-12 flex flex-col gap-y-4">
          {viewing === "arcade" && (
            <>
              <h1 className="text-6xl font-eb font-semibold text-primary">
                Arcade
              </h1>
              <p className="font-helvetica text-2xl text-primary font-bold">
                Fight 2v2 against computer up to 5 games, control a preset
                character and a customizeable character. After each games, you
                get chances to upgrade your characters stats and choose new
                skills.
              </p>
              <p className="font-helvetica text-2xl text-primary font-bold">
                Play up to 8 unqiue routes with 8 stories being told. Upon route
                completion, earns unqiue rewards which can be used in
                multiplayer matches.
              </p>
            </>
          )}
          {viewing === "dojo" && (
            <>
              <h1 className="text-6xl font-eb font-semibold text-primary">
                Dojo
              </h1>
              <p className="font-helvetica text-2xl text-primary font-bold">
                Try combo and strategies on a dummy. Discover and tactics to
                apply them in the real fight.
              </p>
            </>
          )}
          {viewing === "tutorial" && (
            <>
              <h1 className="text-6xl font-eb font-semibold text-primary">
                Tutorial
              </h1>
              <p className="font-helvetica text-2xl text-primary font-bold">
                Tutorial is recommended for players playing for the first time.
                Tutorial will cover all system you’ll see in real matches. You
                can head over to arsernal to learn more about skills and spells.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Singleplayer;
