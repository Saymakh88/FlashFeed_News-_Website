import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} FlashFeed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
