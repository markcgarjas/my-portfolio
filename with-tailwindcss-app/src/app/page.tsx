import React from 'react';
import Head from 'next/head'
import About from "@/app/components/About";
import AboutDetail from "@/app/components/AboutDetail";


const Home = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="max-w-4xl mx-auto mt-0 antialiased">
        <About/>
      </main>
    </div>
  );
};

export default Home;