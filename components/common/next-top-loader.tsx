// NextTopLoader.tsx
"use client";

import Loader from "nextjs-toploader";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import nProgress from "nprogress";

const NextTopLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    nProgress.done();
  }, [pathname]);

  return <Loader color="#000000" />;
};

export default NextTopLoader;
