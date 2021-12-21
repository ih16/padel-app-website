import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

function MainLayout({ children }) {
  return (
    <div className="font-karla pt-12">
      <Head>
        <title>Allez Padel</title>
        <meta name="description" content="Allez Padel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <footer className="font-medium text-xl text-gray-700 text-center mx-2 mt-16 mb-10">
        © 2021 Allez Padel App. All rights reserved.
      </footer>
    </div>
  );
}

export default MainLayout;
