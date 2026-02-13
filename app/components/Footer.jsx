import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
            <Image 
                src='/logo.png'
                alt='logo'
                width={50}
                height={50}
            />
        </span>
      </div>
    </footer>
  );
};

export default Footer;