import React from "react";
import QueryClient from "./providers/QueryClient";
// import Header from "../header";
// import Footer from "../ui/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <QueryClient>
        <main className="relative mx-auto flex min-h-screen flex-col overflow-hidden">
          {children}
        </main>
      </QueryClient>
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
