import { Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { Item } from "react-use-cart";
import { CartItem } from "..";

interface CartItemsListProps {
  items: Item[];
}

const CartItemsList = ({ items }: CartItemsListProps) => {
  const cartItems = items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      transition={{
        duration: 0.25,
        delay: index * 0.25,
      }}
    >
      <CartItem key={item.id} item={item} />
    </motion.div>
  ));

  return <Stack mt="md">{cartItems}</Stack>;
};

export default CartItemsList;
