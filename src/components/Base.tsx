import React from "react";
import QueryClient from "./providers/QueryClient";
import Footer from "./Footer/Footer";
import Newsletter from "./builder/Newsletter/Newsletter";
import Header from "./Header";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryClient>
        <Newsletter />
        <Header />
        <main className="relative mx-auto flex min-h-screen flex-col overflow-hidden">
          {children}
        </main>
        <Footer />
      </QueryClient>
    </>
  );
};

export default BaseLayout;
