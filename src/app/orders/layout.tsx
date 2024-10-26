"use client"

import { AppShell } from "@mantine/core";
import { PropsWithChildren, Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }: PropsWithChildren) {
    return <Suspense>
        <AppShell bg="#F7F6EB"
            header={<Header />}
            footer={<Footer />}
        >
            {children}
        </AppShell>
    </Suspense>
}