"use client";
import { NavLinks } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      style={{ left: "70%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[30%] max-h-[140px] rounded-full flex justify-between items-center border bg-black border-orange-500 px-4 py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[30px] h-[30px] ${
              path === nav.name ? "text-orange-800" : "text-cyan-400"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
