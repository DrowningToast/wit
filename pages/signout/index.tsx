import { useEffect } from "react";
import router from "next/router";
import { signOut } from "firebase/auth";
import { auth, SignOutFC } from "@fb/auth";

const Signout: React.FC = () => {
  return <SignOutFC />;
};

export default Signout;
