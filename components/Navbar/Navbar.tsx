import Image from "next/image";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { NavbarItems } from "../../constants/Navbar";
import { NavbarItemsES } from "../../constants/es/Navbar.es";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  const { locale, pathname, push } = useRouter();

  const translation = locale === "en" ? NavbarItems : NavbarItemsES;

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(pathname, pathname, { locale: e.target.value });
  };

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
        {translation.map((item, index) => {
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
      <select className={styles.langSelect} onChange={(e) => onSelectChange(e)}>
        <option value={"en"}>EN</option>
        <option value={"es"}>ES</option>
      </select>
    </nav>
  );
};

export default Navbar;
