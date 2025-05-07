import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left flex flex-col items-center w-full ">
          <p className="text-sm">
            Made with ❤️ by{" "}
            <span className="text-white font-medium">Niraj</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Niraj Dev | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
