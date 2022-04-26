import { getFirebaseToken } from "@fb/auth";
import { firebaseToken } from "@jotai/store";
import axios from "axios";
import { useAtom } from "jotai";
import React from "react";

const DebugPage: React.FC = () => {
  const testAuth = async () => {
    const { data } = await axios.get<{ data: string }>(
      `${process.env.NEXT_PUBLIC_local_backend}/debug/auth`
    );
    console.log(data);
  };

  let { socket }: { socket: WebSocket | null } = { socket: null };
  const [token] = useAtom(firebaseToken);

  const connectWS = () => {
    socket = new WebSocket("ws://localhost:8080");
  };

  const disconnectWS = () => {
    socket?.close();
  };

  const sendMessage = () => {
    socket?.send(
      JSON.stringify({
        action: "$broadcast",
        data: "hello world",
      })
    );
  };

  const validate = async () => {
    socket?.send(
      JSON.stringify({
        action: "$validate",
        token,
      })
    );
  };

  return (
    <>
      <button className="w-20 h-10 border-2 border-black" onClick={testAuth}>
        Test Auth
      </button>
      <button className="w-20 h-10 border-2 border-black" onClick={connectWS}>
        Connect WS
      </button>
      <button
        className="w-20 h-10 border-2 border-black"
        onClick={disconnectWS}
      >
        Disconnect WS
      </button>
      <button className="w-20 h-10 border-2 border-black" onClick={validate}>
        Validate
      </button>
      <button className="w-20 h-10 border-2 border-black" onClick={sendMessage}>
        Send Message
      </button>
    </>
  );
};

export default DebugPage;
