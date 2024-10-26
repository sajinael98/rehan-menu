import { formatCurrency } from '@/app/utils'
import { Button, Group, Footer as MantineFooter, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { ConformationDialog } from '..'

const Footer = () => {
  const [opened, { open }] = useDisclosure(false)
  const [isLoading, { open: ShowLoader }] = useDisclosure(false)
  const { cartTotal, emptyCart, isEmpty } = useCart()
  const params = useSearchParams()
  const router = useRouter()
  function clickHandler() {
    if (params.get("deliveryMethod") == "takeout") {
      router.push("/orders/checkout/delivery-detail")
    } else {
      ShowLoader()
    }
  }

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        open()
        emptyCart()
      }, 2000);
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <MantineFooter height={62} bg="#F1EECC" px="md">
      <ConformationDialog opened={opened} />
      <Group h="100%" position='apart'>
        <Stack align='center' justify='flex-start' spacing={0}>
          <Text fz={"sm"} fw={300} c="gray.6">المجموع</Text>
          <Text fw={700} fz={20} c="custom-green.8">{formatCurrency(cartTotal)}</Text>
        </Stack >
        <Button w={170} size='md' fw={700} radius="md" onClick={clickHandler} disabled={isEmpty} loading={isLoading}>
          {params.get("deliveryMethod") == "takeout" ? "التالي" : "أرسال"}
        </Button>
      </Group>
    </MantineFooter>
  )
}

export default Footer