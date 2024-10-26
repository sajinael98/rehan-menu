import { Box, Group, Text } from "@mantine/core";
import { ICategory } from "../../types";
import Image from "next/image";
import Item from "../Item";

interface CategoryProps {
  category: ICategory;
}

export default function Category({ category }: CategoryProps) {
  const items = category.items.map((item) => (
    <Item key={item.title} item={item} />
  ));

  return (
    <Box id={category.title}>
      <Group position="right" my="md">
        <Text
          sx={(theme) => ({
            position: "sticky",
            top: 0,
            fontWeight: 700,
            fontSize: theme.fontSizes.md,
            color: "white",
          })}
        >
          {category.title}
        </Text>
        <Box
          bg="white"
          p={3}
          sx={(theme) => ({
            backgroundColor: "white",
            borderRadius: theme.radius.sm,
          })}
        >
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
            }}
          >
            <Image
              alt={category.title}
              src={`/images/icons/${category.icon}`}
              fill
            />
          </Box>
        </Box>
      </Group>
      {items}
    </Box>
  );
}
