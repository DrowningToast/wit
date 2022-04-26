import { getIdToken, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth, getFirebaseToken, getNewIdToken } from "@fb/auth";
import { firebaseReady, firebaseToken, firebaseUserAtom } from "@jotai/store";
import { useAtom } from "jotai";
import axios from "axios";
import WebworkerLoader from "sys/webworkers/loader";
import tokenRefresher from "sys/webworkers/tokenRefresher";

const AuthUpdater = () => {
  const [profile, setProfile] = useAtom(firebaseUserAtom);
  const [ready, setReady] = useAtom(firebaseReady);
  const [token, setToken] = useAtom(firebaseToken);

  useEffect(() => {
    // Setup auth state detector
    onAuthStateChanged(auth, async (user) => {
      // Load account data from firebase auth to redux state
      if (user) {
        const token = await getFirebaseToken();
        // Setup default header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setProfile({ ...user, token });
        setToken(token);
      } else {
        setProfile("SIGNEDOUT");
      }
      setReady(true);
    });

    // Setup webworker for token refresher
    let worker = WebworkerLoader(tokenRefresher);
    worker.postMessage("Trigger Refresh WebWorker");
    worker.onmessage = async (e) => {
      try {
        console.log("Webworker is refreshing the token");
        const token = await getNewIdToken();
        setProfile({
          ...profile,
          token,
        });
        setToken(token);
      } catch (e) {
        console.error("An error has occured while trying to refresh ID token");
        console.log(e);
      }
    };
  }, []);
  return null;
};

export default AuthUpdater;
