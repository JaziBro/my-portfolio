import React from "react";
import Light from "./Light";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <Light/>
      <div className="container p-12 flex justify-between">
        <span>Jazil Hashmi</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
