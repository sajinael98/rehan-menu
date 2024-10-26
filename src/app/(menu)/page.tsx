"use client"

import useGetCategories from "@/app/modules/menu/infrastructure/use-get-categories";
import { CategoriesList } from "@/app/modules/menu/presentation";
import { Box, Container, Image, Stack, Text, TextInput } from "@mantine/core";
import { useDisclosure, useInputState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Welcome from "./components/Welcome";
import { useEffect } from "react";

export default function MenuPage() {
    const [search, setSearch] = useInputState('')
    const { data } = useGetCategories()

    return <Container
        sx={(theme) => ({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingBlock: theme.spacing.md
        })}
    >
        <Stack>
            <Image
                src="/images/logo.png"
                alt="logo"
                width={120}
                height={50}
                style={{ display: 'block', marginInline: "auto", objectFit: "cover", filter: "brightness(0) invert(1)" }} />
            <Text
                fz={20}
                fw={800}
                ta='right'
                c="white">
                ! صباح الخير
            </Text>
            <TextInput
                styles={{
                    input: {
                        textAlign: "right"
                    }
                }}
                value={search}
                onChange={setSearch}
                icon={<IconSearch />}
                placeholder='ماذا تود أن تأكل اليوم ؟' />
        </Stack>
        <Box sx={{ position: "relative", flex: 0.95 }}>
            <CategoriesList data={data} />
        </Box>
    </Container>
}