import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header stays at top */}
      <Header />
      
      {/* Main content area - grows to fill space */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;