import { usePathname } from "next/navigation"
import { Button, Navbar as MantineNavbar, ThemeIcon } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES } from "@/app/modules/menu/data";

interface NavbarProps {
    opened: boolean;
    close: () => void;
}
export default function Navbar({ close, opened }: NavbarProps) {
    const path = usePathname()
    if (path !== "/menu") {

    }
    return (
        <AnimatePresence>
            {opened && <motion.div style={{ zIndex: 1 }} initial={{ translateX: "-100vh" }} animate={{ translateX: 0 }} exit={{ translateX: "-100vh" }} transition={{ ease: "linear" }}>
                <MantineNavbar
                    bg="#F8F7E6"
                    hidden={!opened}
                    height="100%"
                    w={270}
                    withBorder={false}
                >
                    <Button.Group mt={60} orientation='vertical'>

                        {Object.keys(CATEGORIES).map((category, index) => <Button
                            key={category}
                            uppercase={false}
                            radius={0}
                            variant='subtle'
                            mb="md"
                            component='a'
                            onClick={close}
                            c="custom-green.8"
                            href={`#${CATEGORIES[index].name}`}
                            rightIcon={<ThemeIcon pos="relative" bg="transparent">
                                <Image src={`/images/icons/Vector${index + 1}.png`} alt={CATEGORIES[index].name} fill />
                            </ThemeIcon>}
                            styles={{
                                inner: {
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }
                            }}
                            sx={{
                                "&": {
                                    fontSize: 20,
                                    fontWeight: 500,
                                    lineHeight: 24,
                                },
                                "&:hover": {
                                    background: "#CDD7B1"
                                }
                            }}
                        >
                            {CATEGORIES[index].name}
                        </Button>)}
                    </Button.Group>
                </MantineNavbar>
            </motion.div>}
        </AnimatePresence>
    )
}