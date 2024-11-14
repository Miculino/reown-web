"use client";

// React
import { useState, useEffect, useCallback } from "react";

// Components
import Button from "@/app/(site)/components/Button";
import NavbarItem from "@/app/(site)/components/NavbarItem";

// Styles
import styles from "./navbar.module.scss";

// CLSX
import clsx from "clsx";

// Constants
import { NAVBAR_ITEMS } from "@/app/constants/navbarItems";

// Logos
import ReownLogo from "@/app/(site)/logos/ReownLogo";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState<boolean>(false);
  const [toggledItems, setToggledItems] = useState<string[]>([]);

  const handleToggleCollapsibleMenu = () => {
    setIsCollapsibleOpen((prevState) => !prevState);
  };

  const handleToggleSubMenu = (itemTitle: string) => {
    setToggledItems((prevItems) =>
      prevItems.includes(itemTitle)
        ? prevItems.filter((toggledItem) => toggledItem !== itemTitle)
        : [...prevItems, itemTitle]
    );
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
        "flex flex-col gap-1"
      )}
    >
      <div className="flex gap-1">
        <ReownLogo width={180} height={48} />

        <Button
          onClick={handleToggleCollapsibleMenu}
          className={clsx(styles.navbar__collapsibleBtn, {
            [styles.isOpen]: isCollapsibleOpen,
          })}
          intent={"tertiary"}
        >
          {""}
        </Button>
      </div>

      <div className="mt-1 gap-1 flex flex-wrap cursor-pointer">
        {isCollapsibleOpen &&
          NAVBAR_ITEMS.flatMap((navItem, navIndex) => [
            <div
              onClick={() => handleToggleSubMenu(navItem.title)}
              className={clsx(
                "p-2 px-6 rounded-2xl hover:rounded-3xl cursor-pointer transition-all duration-300",
                toggledItems.includes(navItem.title)
                  ? "bg-dark-gray text-white"
                  : "bg-white text-dark-gray"
              )}
              key={`${navItem.title}-${navIndex}`}
            >
              <span className="text-[22px]">{navItem.title}</span>
            </div>,
            ...(toggledItems.includes(navItem.title)
              ? navItem.links.map(({ url, label }) => (
                  <NavbarItem
                    intent={
                      label.toLowerCase() as
                        | "appkit"
                        | "walletkit"
                        | "cloud"
                        | "docs"
                    }
                    url={url}
                    label={label}
                    key={label}
                  />
                ))
              : []),
          ])}
      </div>
    </nav>
  );
}
