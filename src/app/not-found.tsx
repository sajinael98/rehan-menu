"use client";

import { Box, Button, Flex, Text, ThemeIcon } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Flex
      sx={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/images/welcome.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "calc(100% + 80px)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
        }}
      ></Box>

      <Flex
        justify="center"
        gap="md"
        align="center"
        direction="column"
        bg="#EFF2E6"
        fz={24}
        fw={800}
        c="custom-green.8"
        ta="center"
        sx={(theme) => ({
          zIndex: 1,
          borderRadius: theme.spacing.md,
          width: 350,
          height: 250,
        })}
      >
        <ThemeIcon color="red" h={50} w={50} sx={{ borderRadius: "50%" }}>
          <IconX />
        </ThemeIcon>
        عذرًا، الصفحة التي تبحث عنها
        <br />! ليست هنا
        <Button onClick={() => router.push("/")}>
          الرجوع الى الصفحة الرئيسية
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;
