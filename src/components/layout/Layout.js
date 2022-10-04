import React from "react";
import MainNav from "./Navbar";
import Footer from "./Footer";
import "../../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <MainNav />
      <div className="content position-relative">{children}</div>
      <Footer />
    </div>
  )
}
