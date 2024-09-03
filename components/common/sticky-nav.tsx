"use client";
import React, { useEffect, useState } from "react";
import MainNav from "../navbar/main";
import { motion, AnimatePresence } from "framer-motion";

const StickyNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="sticky-nav"
        >
          <MainNav />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
