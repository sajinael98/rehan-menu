import { Button, Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconMoodSad2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
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
  if (!items.length) {
    return (
      <Flex
        sx={(theme) => ({
          background: "none",
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        })}
      >
        <ThemeIcon size={100} variant="outline" sx={{ border: "none" }}>
          <IconMoodSad2 size="5rem" />
        </ThemeIcon>
        <Text ta="center" dir="rtl" w={300} fw={400} mb="md">
          يبدو أنك لم تضف أي منتجات بعد. تصفح القائمة واختر ما يعجبك!
        </Text>
        <Button href="/" component={Link}>
          العودة الى القائمة
        </Button>
      </Flex>
    );
  }
  return <Stack mt="md">{cartItems}</Stack>;
};

export default CartItemsList;
