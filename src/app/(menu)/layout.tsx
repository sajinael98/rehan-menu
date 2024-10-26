"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <AppShell
      navbar={<Navbar opened={opened} close={close} />}
      footer={<Footer toggle={toggle} />}
      padding={0}
      sx={{
        backgroundImage: "url('/images/welcome.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "calc(100% + 80px)",
        "& main": {
          backdropFilter: "blur(10px)",
        },
      }}
    >
      {children}
    </AppShell>
  );
}
