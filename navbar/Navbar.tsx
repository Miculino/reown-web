"use client";

// React
import { useState, useEffect, useCallback } from "react";

// Components
import Button from "@/app/(site)/components/Button";

// Styles
import styles from "./navbar.module.scss";

// CLSX
import clsx from "clsx";

// Logos
import ReownLogo from "@/app/(site)/logos/ReownLogo";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState<boolean>(false);

  const handleToggleCollapsibleMenu = () => {
    setIsCollapsibleOpen((prevState) => !prevState);
  };

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
      className={clsx(
        styles.navbar,
        {
          [styles.fixed]: isFixed,
          [styles.hidden]: !isFixed,
        },
        "flex gap-1"
      )}
    >
      <ReownLogo width={180} height={48} />

      <Button
        onClick={handleToggleCollapsibleMenu}
        className={clsx(styles.navbar__collapsibleBtn, {
          [styles.isOpen]: isCollapsibleOpen,
        })}
        color={"gray"}
      >
        {""}
      </Button>
    </nav>
  );
}
