import Head from "next/head";
import Landing from "../components/intro/landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>WIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
}
