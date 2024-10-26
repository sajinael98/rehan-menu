import { Button, Group, Header as MantineHeader } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <MantineHeader height={50} bg="#F7F6EB" px="md" withBorder={false}>
      <Group align="center" h="100%">
        <Button
          variant="subtle"
          leftIcon={<IconArrowLeft />}
          onClick={() => router.push("/menu")}
        >
          الرجوع
        </Button>
      </Group>
    </MantineHeader>
  );
};

export default Header;
