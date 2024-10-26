import { formatCurrency } from "@/app/utils";
import { ActionIcon, Box, Card, Group, Text } from "@mantine/core";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Item, useCart } from "react-use-cart";

interface CartItemProps {
  item: Item;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateItemQuantity, removeItem } = useCart();
  const description =
    item.size +
    ", " +
    item.modifiers.join(", ") +
    (item.description ? ", " + item.description : "");

  function incrementQuantityHandler() {
    updateItemQuantity(item.id, (item?.quantity || 1) + 1);
  }

  function decrementQuantityHandler() {
    if (item?.quantity && item?.quantity == 1) {
      return;
    }
    updateItemQuantity(item.id, (item?.quantity || 1) - 1);
  }

  return (
    <Card className="cart-item" radius="xl" shadow="sm" bg="#F1EECC">
      <Group>
        <Box sx={{ flex: 1, alignSelf: "flex-start" }}>
          <Group position="apart" mb="xs">
            <ActionIcon size="sm" onClick={() => removeItem(item.id)}>
              <IconX />
            </ActionIcon>
            <Text fw={500}>{item.id}</Text>
          </Group>
          <Text ta="right" fw={300} fz="sm" mb="xs">
            {description}
          </Text>
          <Group position="apart" align="center">
            <Group>
              <ActionIcon
                variant="filled"
                bg="#7F7735"
                onClick={incrementQuantityHandler}
              >
                <IconPlus />
              </ActionIcon>
              <Text>{item.quantity}</Text>
              <ActionIcon
                variant="filled"
                bg="#7F7735"
                onClick={decrementQuantityHandler}
              >
                <IconMinus />
              </ActionIcon>
            </Group>
            <Text
              sx={(theme) => ({
                backgroundColor: "#7F7735",
                width: 70,
                padding: 4,
                borderRadius: theme.spacing.sm,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
              })}
            >
              {formatCurrency(item.price)}
            </Text>
          </Group>
        </Box>
        <Box
          sx={(theme) => ({
            height: 75,
            width: 75,
            position: "relative",
            borderRadius: theme.spacing.sm,
            overflow: "hidden",
            alignSelf: "flex-start",
          })}
        >
          <Image src={item.image} alt={item.id} objectFit="cover" fill />
        </Box>
      </Group>
    </Card>
  );
};

export default CartItem;
