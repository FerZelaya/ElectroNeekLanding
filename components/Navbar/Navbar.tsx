import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { NavbarItems } from "../../constants/Navbar";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <nav className={`${styles.navbar} ${scroll > 0 && styles.sticky}`}>
      <Image
        src={"/img/logo.svg"}
        width={150}
        height={50}
        alt="ElectroNeek"
        style={{ cursor: "pointer" }}
      />
      <ul>
        {NavbarItems.map((item, index) => {
          return (
            <li className={styles.navbarItem} key={index}>
              <a>{item.item}</a>
            </li>
          );
        })}
      </ul>
      <div className={styles.burger}>
        <Image src={"/img/burgerMenu.svg"} alt="menu" height={20} width={20} />
      </div>
    </nav>
  );
};

export default Navbar;
