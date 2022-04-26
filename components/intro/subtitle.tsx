import { firebaseUserAtom } from "@jotai/store";
import { User } from "firebase/auth";
import { useAtom } from "jotai";
import Link from "next/link";

interface props {
  user: User | string | null;
}

const IntroSubtitle: React.FC<props> = ({ user }) => {
  return (
    <>
      {user && user !== "SIGNEDOUT" && (
        <Link href={"/home"}>
          <a className="font-eb font-medium  text-2xl text-primary cursor-pointer">
            Click here to continue
          </a>
        </Link>
      )}
    </>
  );
};

export default IntroSubtitle;
