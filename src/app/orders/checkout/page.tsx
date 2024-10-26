"use client"

import { CartItemsList } from '@/app/modules/cart/presentation'
import { Button, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { useCart } from 'react-use-cart'

const CheckoutPage = () => {
  const { items } = useCart()
  const [isTakeAway, { toggle }] = useDisclosure(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const params = new URLSearchParams()
    if (isTakeAway) {
      params.set("deliveryMethod", "takeout")
    } else {
      params.set("deliveryMethod", "dinein")
    }
    router.push(pathname + '?' + params)
  }, [isTakeAway])

  return (
    <Suspense>
      <Group>
        <Button onClick={toggle} sx={{ flex: 1 }} size="md" fw={800} radius="xl" variant={isTakeAway ? 'filled' : 'outline'}>
          توصيل
        </Button>
        <Button onClick={toggle} sx={{ flex: 1 }} size="md" fw={800} radius="xl" variant={isTakeAway ? 'outline' : 'filled'}>
          الطلب في المطعم
        </Button>
      </Group>

      <CartItemsList items={items} />
    </Suspense>
  )
}

export default CheckoutPage