import {
  Box,
  Card,
  Group,
  ScrollArea,
  Skeleton,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import React from "react";

const CategoriesListSkeleton = () => {
  return (
    <ScrollArea
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
      }}
      type="never"
    >
      {Array(2)
        .fill(0)
        .map((index) => (
          <Box key={index}>
            <Group position="right" my="md">
              <Skeleton w={100} h={16} />
              <Skeleton w={30} h={30} />
            </Group>
            <Stack>
              {Array(5)
                .fill(0)
                .map((index) => (
                  <Card
                    key={index}
                    radius="md"
                    shadow="sm"
                    h={200}
                    bg="#EFF2E6"
                    p={0}
                  >
                    <Card.Section>
                      <Skeleton h={128} />
                    </Card.Section>
                    <Card.Section px="sm">
                      <Group align="center" my="xs" position="apart">
                        <Group fz="xs" spacing={5}>
                          <Skeleton w={16} h={16} />
                          <ThemeIcon c="#FFC531" size="xs">
                            <IconStarFilled />
                          </ThemeIcon>
                        </Group>
                        <Skeleton h={16} w={180} />
                      </Group>
                      <Group position="apart" my="xs">
                        <Skeleton w={16} h={16} />
                        <Stack spacing={5} align="flex-end">
                          <Skeleton w={300} h={12} />
                          <Skeleton w={200} h={12} />
                        </Stack>
                      </Group>
                    </Card.Section>
                  </Card>
                ))}
            </Stack>
          </Box>
        ))}
    </ScrollArea>
  );
};

export default CategoriesListSkeleton;
