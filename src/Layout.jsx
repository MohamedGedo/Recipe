import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mb-5 flex flex-col md:flex-row">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className="py-10 px-2 md:px-5 lg:px-11 bg-gray-200 min-h-screen sm:ml-70"
          onClick={() => setIsOpen(false)}
        >
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
