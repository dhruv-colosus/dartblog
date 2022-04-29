import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/">
          <li
            className={active === "home" ? `styles.${active}` : ""}
            onClick={() => {
              setActive("home");
            }}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={active === "about" ? `styles.${active}` : ""}
            onClick={() => {
              setActive("about");
            }}
          >
            About
          </li>
        </Link>
        <Link href="/blog">
          <li
            className={active === "blog" ? `styles.${active}` : ""}
            onClick={() => {
              setActive("blog");
            }}
          >
            Blog
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={active === "contact" ? `styles.${active}` : ""}
            onClick={() => {
              setActive("contact");
            }}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
