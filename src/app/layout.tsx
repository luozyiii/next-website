"use client"

import { Inter } from "next/font/google";
import UAParser from "ua-parser-js";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewport, setViewport] = useState("h5");

  useEffect(() => {
    const parser = new UAParser("user-agent");
    parser.setUA(window.navigator.userAgent);
    const { device } = parser.getResult();
    if (device.type === "mobile") {
      setViewport("h5");
    } else {
      setViewport("desktop");
    }
  }, []);

  return (
    <html
      lang="en"
      style={{ minWidth: viewport === "desktop" ? "1200px" : "100vw" }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
