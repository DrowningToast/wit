import { User } from "firebase/auth";
import Link from "next/link";

interface props {
  user: User | null;
}

const IntroSubtitle: React.FC<props> = ({ user }) => {
  return (
    <>
      {user && (
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
