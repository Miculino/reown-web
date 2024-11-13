"use client";

import styles from "./navbar.module.scss";
import clsx from "clsx";
import ReownLogo from "@/app/(site)/logos/ReownLogo";
import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      setIsFixed(false);
    } else if (currentScrollY < lastScrollY) {
      setIsFixed(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={clsx(styles.navbar, {
        [styles.fixed]: isFixed,
        [styles.hidden]: !isFixed,
      })}
    >
      <ReownLogo width={180} height={48} />
    </nav>
  );
}
