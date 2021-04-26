import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer id="footer" className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <div>All rights reserved. Design by Emmanuel Adebayo&trade;</div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {date.getFullYear()} Copyright: Photos
      </div>
    </footer>
  );
};

export default Footer;
