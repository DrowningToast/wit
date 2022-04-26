import { ConditionalRedirect } from "@fb/auth";
import { useState } from "react";
import { useEffect } from "react";

const GameDebug = () => {
  const [gameSocket, setSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    if (!gameSocket) {
      let temp = new WebSocket("ws://localhost:8080");
      temp.addEventListener("open", (event) => {
        setSocket(temp);
      });
      temp.addEventListener("message", (event) => {
        console.log(event);
      });
    }
  }, []);

  return (
    <>
      <ConditionalRedirect
        path={"/"}
        cb={(user: any) => {
          return user === "SIGNEDOUT";
        }}
      />
      <h1>Game debug here</h1>
      {gameSocket}
    </>
  );
};

export default GameDebug;
