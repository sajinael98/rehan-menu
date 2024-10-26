"use client"

import { useDocumentTitle } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
    const path = usePathname()
    const splitedPath = path.split("/")
    useDocumentTitle(splitedPath[splitedPath.length - 1])
    return children
}