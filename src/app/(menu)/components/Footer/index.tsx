import { ActionIcon, Box, Button, Group, Footer as MantineFooter, ThemeIcon } from '@mantine/core'
import { IconMenu2, IconShoppingCartFilled } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from 'react-use-cart'

interface FooterProps {
    toggle: () => void
}

export default function Footer({ toggle }: FooterProps) {
    const { totalItems } = useCart()
    const router = useRouter()
    const pathname = usePathname()

    if (pathname === "/welcome") {
        return null
    }

    function checkoutHandler() {
        router.push("/orders/checkout")
    }

    return (
        <MantineFooter
            withBorder={false}
            height={62}
            bg='custom-green.8'
            pl="md"
        >
            <Group h="100%" position='apart' align='center' >
                <ActionIcon onClick={toggle} c='white'>
                    <IconMenu2 />
                </ActionIcon>
                <Button
                    sx={{
                        position: "relative",
                    }}
                    onClick={checkoutHandler}
                    rightIcon={<ThemeIcon
                        sx={{ borderRadius: "50%" }}
                        h={32}
                        w={32}
                        c="custom-green.8"
                        variant='filled'
                        color='white'>
                        <IconShoppingCartFilled />
                    </ThemeIcon>}
                >
                    الحساب
                    <Box
                        sx={(theme) => ({
                            width: 18,
                            height: 18,
                            position: "absolute",
                            top: -9,
                            right: 7.5,
                            color: theme.colors['custom-green']["8"],
                            backgroundColor: "#F1EECC",
                            textAlign: "center",
                            borderRadius: "50%",
                        })}
                        component='span'
                    >
                        {totalItems}
                    </Box>
                </Button>
            </Group>
        </MantineFooter >
    )
}