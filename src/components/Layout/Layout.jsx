import React from "react";
import "./Layout.scss";
import logo from "../../assets/images/logo.png";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <img src={logo} alt={logo} className="header__navbar_logo" />
          <ul className="header__navbar_links">
            <li className="header__navbar_links_item">
              <a href="/home">Магазин</a>
            </li>
            <li className="header__navbar_links_item">
              <a href="/home">Афиша выставок</a>
            </li>
            <li className="header__navbar_links_item">
              <a href="/home">Художники</a>
            </li>
            <li className="header__navbar_links_item">
              <a href="/home">О галерее</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
