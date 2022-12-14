import type { NextPage } from "next";
import Head from "next/head";
import TodoContainer from "../containers/TodoContainer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col mt-10">
        <h1 className="font-body text-h3">나의 할일</h1>
        <TodoContainer />
      </main>
    </div>
  );
};

export default Home;
