"use client";
import { useIsMobile } from "@/app/hooks/use-is-mobile";
import { Box, Card, MediaQuery, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";

export default function Welcome() {
  const isMobile = useIsMobile();

  return (
    <Stack
      sx={{
        height: "100%",
        justifyContent: "center",
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
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Stack
          align="center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          <motion.img
            animate={{
              filter: "brightness(0) invert(1)",
            }}
            transition={{
              delay: 1.5,
              ease: "easeOut",
            }}
            src="/images/logo.png"
            width={350}
            height={170}
          />
          <Card
            initial={{ translateY: "100vh" }}
            animate={{ translateY: 0 }}
            transition={{
              delay: 2,
              duration: .5
            }}
            ta="center"
            bg="gray.0"
            component={motion.div}
          >
            هذه النسخة متاحة فقط للاستخدام على أجهزة الموبايل. نعتذر عن أي إزعاج
            قد يسببه ذلك.
          </Card>
        </Stack>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <motion.img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
          animate={{
            filter: "brightness(0) invert(1)",
          }}
          transition={{
            delay: 1.5,
            ease: "easeOut",
          }}
          src="/images/logo.png"
          width={350}
          height={170}
        />
      </MediaQuery>

      <motion.div
        style={{
          position: "relative",
          background: "url('/images/welcome-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{
          height: 50,
          top: 120,
        }}
        animate={{
          flex: 1,
          top: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{
            display: "none",
          }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Text fz={24} fw={300} c="#F0DDDF" ta="center">
            أهلاً وسهلاً بكم
          </Text>
        </motion.div>
      </motion.div>
    </Stack>
  );
}
