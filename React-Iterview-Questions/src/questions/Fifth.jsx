// // Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
// down. (Key concepts: scroll event, window.scrollY, classList.add/remove)

import { useEffect, useState } from "react";

export function Fifth() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      My Sticky Header
    </header>
  );
}
