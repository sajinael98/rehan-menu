import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Radio,
  Stack,
  Text,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCounter } from "@mantine/hooks";
import { IconMinus, IconPlus, IconStarFilled } from "@tabler/icons-react";
import { useAnimate } from "framer-motion/mini";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { IItem } from "../../types";
import { formatCurrency } from "@/app/utils";

interface ItemProps {
  item: IItem;
}
interface ItemForm {
  id: string;
  image: string;
  description: string;
  modifiers: string[];
  size: string;
  price: number;
}
export default function Item({ item }: ItemProps) {
  const { addItem, inCart, updateItem, getItem } = useCart();
  const cartItem = getItem(item.title);
  const [target, animate] = useAnimate();
  const [quantity, { increment, decrement }] = useCounter(cartItem?.quantity);
  const { getInputProps, setFieldValue, onSubmit, errors, values } = useForm({
    initialValues: {
      id: cartItem?.id ?? item.title,
      image: cartItem?.image ?? item.image,
      description: cartItem?.description ?? "",
      modifiers: cartItem?.modifiers ?? [],
      size: cartItem?.size ?? "",
      price: cartItem?.price ?? 0,
    },
    validate: {
      size: (value) => value.length === 0,
    },
  });

  async function showOptions() {
    animate(".item-summary", { position: "absolute", zIndex: 0, opacity: 0 });
    animate(".item-options", { opacity: 1, zIndex: 1 }, { duration: 0.5 });
    animate(".item-options", { position: "static" });
  }
  async function hideOptions() {
    animate(".item-options", { position: "absolute", zIndex: -1, opacity: 0 });
    animate(".item-summary", { opacity: 1, zIndex: 1 }, { duration: 0.5 });
    animate(".item-summary", { position: "static" });
  }

  function submitHandler(values: ItemForm) {
    if (inCart(values.id)) {
      updateItem(values.id, { ...values, quantity });
    } else {
      addItem(values, quantity);
    }
    hideOptions();
  }

  return (
    <Box ref={target} className="item" sx={{ position: "relative" }}>
      <Card
        className="item-summary"
        onClick={showOptions}
        shadow="sm"
        h={200}
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: theme.radius.md,
          marginBottom: theme.spacing.md,
          backgroundColor: "#EFF2E6",
          zIndex: 1,
        })}
      >
        <Card.Section pos="relative" p={0} sx={{ flex: 2 }}>
          <Image objectFit="cover" src={item.image} alt={item.title} fill />
        </Card.Section>
        <Card.Section px="sm">
          <Group align="center" my="xs" position="apart">
            <Group fz="xs" spacing={5}>
              20
              <ThemeIcon c="#FFC531" size="xs">
                <IconStarFilled />
              </ThemeIcon>
            </Group>
            <Text fz={14} fw={700} ta="right" c="green" style={{ flex: 1 }}>
              {item.title}
            </Text>
          </Group>
          <Group my="xs">
            <Text
              px="sm"
              fz={14}
              fw={700}
              bg="green"
              c="white"
              style={{ borderRadius: 20 }}
              span
            >
              {formatCurrency(
                item.sizes.find((size) => !!size.default)?.price as number,
              )}
            </Text>
            <Text
              fz={10}
              fw={400}
              lineClamp={2}
              style={{ flex: 1, textAlign: "right" }}
            >
              {item.description}
            </Text>
          </Group>
        </Card.Section>
      </Card>
      <Card
        component="form"
        onSubmit={onSubmit(submitHandler)}
        className="item-options"
        ref={target}
        shadow="sm"
        mih={200}
        sx={(theme) => ({
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: theme.radius.md,
          marginBottom: theme.spacing.md,
          backgroundColor: "#EFF2E6",
          display: "flex",
          opacity: 0,
          flexDirection: "column",
          gap: theme.spacing.md,
          zIndex: 0,
        })}
      >
        <Checkbox.Group
          orientation="horizontal"
          sx={{ ".mantine-Group-root": { justifyContent: "flex-end" } }}
          labelProps={{display:"none"}}
          {...getInputProps("modifiers")}
        >
          {item.modifiers.map((modifier) => (
            <Checkbox
              size="xs"
              key={modifier}
              labelPosition="left"
              label={modifier}
              value={modifier}
            />
          ))}
        </Checkbox.Group>

        <Group spacing="xs">
          <Stack
            px="sm"
            sx={(theme) => ({
              width: 100,
              height: 85,
              alignItems: "flex-end",
              border: "1px solid",
              borderTop: "none",
              borderColor: errors?.size ? "red" : theme.colors.green,
              borderRadius: theme.spacing.xs,
            })}
          >
            <Radio.Group
              onChange={(value) => {
                const size = item.sizes.find((size) => size.title === value);
                setFieldValue("size", size?.title as string);
                setFieldValue("price", size?.price as number);
              }}
              value={values.size}
              orientation="vertical"
              size="xs"
              spacing="xs"
              pb={5}
              label="الحجم"
              pos="relative"
              styles={{
                label: {
                  position: "absolute",
                  top: -10,
                  right: 0,
                  fontWeight: 300
                }
              }}
            >
              {item.sizes.map((size) => (
                <Radio
                  key={size.title}
                  value={size.title}
                  label={size.title}
                  labelPosition="left"
                  styles={{
                    body: {
                      justifyContent: "flex-end",
                    },
                  }}
                />
              ))}
            </Radio.Group>
          </Stack>
          <Textarea

            {...getInputProps("description")}
            sx={{ flex: 2 }}
            placeholder="ملاحظات أضافية على الطلب"
            styles={(theme) => ({
              label: {
                display: "none",
              },
              input: {
                height: 85,
                border: "1px solid",
                borderTop: "none",
                borderColor: theme.colors.green,
                borderRadius: theme.spacing.xs,
                textAlign:"right",
                // fontSize: 16
                "::placeholder": {
                  textAlign:"right",
                  fontSize: 12
                }
              },
            })}
          />
        </Group>
        <Group align="center">
          <Button disabled={quantity === 0} radius="md" size="sm" type="submit">
            {inCart(values.id) ? "تحديث الطلب" : "أضف إلى الطلب"}
          </Button>
          <Group h={"100%"} sx={{ flex: 1 }} position="right" spacing="sm">
            <ActionIcon
              onClick={increment}
              size="sm"
              variant="filled"
              color="primary"
            >
              <IconPlus />
            </ActionIcon>
            <Text
              ta="center"
              sx={(theme) => ({
                width: 30,
                backgroundColor: "#F1EECC",
                borderRadius: theme.spacing.xs,
              })}
            >
              {quantity}
            </Text>
            <ActionIcon
              disabled={
                quantity === 0 || (inCart(item.title) && quantity === 1)
              }
              onClick={decrement}
              size="sm"
              variant="filled"
              color="primary"
            >
              <IconMinus />
            </ActionIcon>
            <Text>:الكمية</Text>
          </Group>
        </Group>
      </Card>
    </Box>
  );
}
