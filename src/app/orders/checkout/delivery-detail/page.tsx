"use client";

import {
  Card,
  Collapse,
  Flex,
  Group,
  Radio,
  Select,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconCheck, IconPencil, IconTriangleFilled } from "@tabler/icons-react";
import Image from "next/image";
import { Suspense } from "react";

const DeliveryDetailPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { values, getInputProps, setFieldValue } = useForm({
    initialValues: {
      name: "",
      paymentType: "cash",
      city: "رام الله",
      address: "حي الجنان - بجانب وزارة الأوقاف",
    },
  });

  return (
    <Suspense>
      <TextInput
        {...getInputProps("name")}
        mb="md"
        label="أسم صاحب الطلب"
        radius="md"
        styles={(theme) => ({
          label: {
            textAlign: "right",
            width: "100%",
            color: theme.colors["custom-green"][8],
            fontWeight: 500,
            marginBottom: 5,
          },
          input: {
            height: 58,
            backgroundColor: "#F1EECC",
            textAlign: "right",
          },
        })}
      />
      <Radio.Group
        mb="md"
        {...getInputProps("paymentType")}
        label="طريقة الدفع"
        styles={(theme) => ({
          label: {
            textAlign: "right",
            width: "100%",
            color: theme.colors["custom-green"][8],
            fontWeight: 500,
            marginBottom: 5,
          },
        })}
        orientation="vertical"
      >
        <Flex
          gap="md"
          align="center"
          justify={"space-between"}
          onClick={()=> setFieldValue("paymentType", "credit card")}
          bg={values.paymentType == "credit card" ? "#1B3F01" : "#F1EECC"}
          sx={(theme) => ({
            height: 58,
            paddingInline: theme.spacing.md,
            borderRadius: theme.spacing.xs,
          })}
        >
          <Image
            width={32}
            height={32}
            src="/images/icons/noto_credit-card.png"
            alt="credit-card"
          />
          <Flex sx={{ flex: 1 }} justify="space-between" align="center">
            <Text
              fw={500}
              w={150}
              c={
                values.paymentType == "credit card" ? "white" : "custom-green.8"
              }
              fz="sm"
            >
              Credit Card
              <br />
              2874***96253
            </Text>
            <Radio
              value="credit card"
              styles={{
                radio: {
                  borderColor: "white",
                  background: "transparent",
                  ":checked": { borderColor: "white" },
                },
              }}
            />
          </Flex>
        </Flex>
        <Flex
          gap="md"
          align="center"
          justify={"space-between"}
          onClick={()=> setFieldValue("paymentType", "cash")}
          bg={values.paymentType == "cash" ? "#1B3F01" : "#F1EECC"}
          sx={(theme) => ({
            height: 58,
            paddingInline: theme.spacing.md,
            borderRadius: theme.spacing.xs,
          })}
        >
          <Image
            width={32}
            height={32}
            src="/images/icons/noto-v1_money-bag.png"
            alt="cash"
          />
          <Flex sx={{ flex: 1 }} justify="space-between" align="center">
            <Text
              fw={500}
              w={150}
              c={values.paymentType == "cash" ? "white" : "custom-green.8"}
              fz="sm"
            >
              Cash
            </Text>
            <Radio
              value="cash"
              styles={{
                radio: {
                  borderColor: "white",
                  background: "transparent",
                  ":checked": { borderColor: "white" },
                },
              }}
            />
          </Flex>
        </Flex>
      </Radio.Group>
      <Card bg="#F1EECC" mb="md" radius="md">
        <Group>
          <ThemeIcon
            variant={"outline"}
            sx={{
              borderRadius: "50%",
              border: (!opened && "none") || undefined,
            }}
            onClick={opened ? close : open}
            size="lg"
          >
            {opened && <IconCheck />}
            {!opened && <IconPencil />}
          </ThemeIcon>
          <Group sx={{ flex: 1 }} position="right">
            <div>
              <Text fw={500} ta="right" c="custom-green.8">
                مدينة رام الله
              </Text>
              <Text fw={300} ta="right" fz="sm" c="custom-green.8">
                حي الجنان - بجانب وزارة الأوقاف
              </Text>
            </div>
            <Image
              height={32}
              width={32}
              src="/images/icons/mdi_delivery-dining-outline.png"
              alt="delivery"
            />
          </Group>
        </Group>
        <Collapse in={opened} py="md">
          <Select
            icon={
              <ThemeIcon
                c="custom-green.8"
                size="xs"
                sx={{ background: "none", rotate: "180deg" }}
              >
                <IconTriangleFilled />
              </ThemeIcon>
            }
            rightSection={undefined}
            mb="sm"
            label=":المدينة"
            data={["رام الله"]}
            withinPortal
            styles={(theme) => ({
              input: {
                borderColor: theme.colors["custom-green"][8],
                borderRadius: theme.spacing.sm,
                background: "transparent",
                flex: 1,
                textAlign: "right",
              },
              root: {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 5,
                '[role="combobox"]': { flex: 1 },
              },
            })}
            {...getInputProps("city")}
          />
          <TextInput
            label=":العنوان"
            styles={(theme) => ({
              input: {
                textAlign: "right",
                borderColor: theme.colors["custom-green"][8],
                borderRadius: theme.spacing.sm,
                background: "transparent",
                flex: 1,
              },
              root: {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 5,
              },
              wrapper: { flex: 1 },
            })}
            {...getInputProps("address")}
          />
        </Collapse>
      </Card>
      <Group position="apart">
        <Text dir="rtl" fw={400} c="custom-green.8">
          50 دقيقة
        </Text>
        <Text fw={400} c="custom-green.8">
          الوقت المتوقع لوصول الطلب
        </Text>
      </Group>
    </Suspense>
  );
};

export default DeliveryDetailPage;
