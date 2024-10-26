"use client"
import { Stack, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function WelcomePage() {
    const router = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace("/menu")
        }, 5000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <Stack
            sx={{
                height: "100%",
                justifyContent: "center"
            }}

        >
            <motion.img
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                }}
                animate={{
                    filter: "brightness(0) invert(1)"
                }}
                transition={{
                    delay: 3,
                    ease: "easeOut"
                }}
                src='/images/logo.png'
                width={350}
                height={170}
            />

            <motion.div
                style={{
                    position: "relative",
                    background: "url('/images/welcome-bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}
                initial={{
                    height: 50,
                    top: 120
                }}
                animate={{
                    flex: 1,
                    top: 0
                }}
                transition={{
                    delay: 3,
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                <motion.div
                    animate={{
                        display: "none"
                    }}
                    transition={{
                        delay: 2.5,
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                >
                    <Text fz={24} fw={300} c='#F0DDDF' ta="center">
                        أهلاً وسهلاً بكم
                    </Text>
                </motion.div>
            </motion.div>
        </Stack>
    )
}