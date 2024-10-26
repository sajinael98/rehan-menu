import { Stack } from '@mantine/core'
import React from 'react'
import { Item } from 'react-use-cart'
import { CartItem } from '..'

interface CartItemsListProps {
    items: Item[]
}

const CartItemsList = ({ items }: CartItemsListProps) => {
    const cartItems = items.map(item => <CartItem key={item.id} item={item} />)
    return (
        <Stack mt="md">
            {cartItems}
        </Stack>
    )
}

export default CartItemsList