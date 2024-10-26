"use client";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { CartProvider } from "react-use-cart";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import Welcome from "./(menu)/components/Welcome";

const inter = Tajawal({ subsets: ["latin"], weight: "400" });

const theme: MantineThemeOverride = {
  colors: {
    "custom-green": [
      "#A6D5A1",
      "#2EDC08",
      "#2BAA07",
      "#298F06",
      "#247B05",
      "#216E04",
      "#1F4903",
      "#1D4402",
      "#1B3F01",
    ],
  },
  primaryColor: "custom-green",
  primaryShade: 8,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isWelcomeShowen, { close: hideWelcome }] = useDisclosure(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideWelcome();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          {isWelcomeShowen && <Welcome />}
          {!isWelcomeShowen && <CartProvider>{children}</CartProvider>}
        </MantineProvider>
      </body>
    </html>
  );
}
