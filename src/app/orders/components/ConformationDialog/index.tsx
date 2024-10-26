import { Button, Modal, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface ConformationDialogProps {
    opened: boolean
}

const ConformationDialog = ({ opened }: ConformationDialogProps) => {
    const router = useRouter()

    function clickHandler() {
        router.push("/menu")
    }

    return (
        <Modal radius="lg" centered opened={opened} onClose={() => { }} withinPortal withCloseButton={false}>
            <Stack align='center'>
                <ThemeIcon variant='filled' sx={{ borderRadius: "50%" }} size={100} >
                    <IconCheck size="4rem" />
                </ThemeIcon>
                <Text ta="center" fw={500} fz={"xl"}>
                    !شكراً لك على طلبك<br />
                    لقد تم استلام طلبك بنجاح وسيتم تجهيزه وتسليمه في أقرب وقت ممكن.
                </Text>
                <Button size="md" onClick={clickHandler}>
                    الرجوع الى القائمة الرئيسية
                </Button>
            </Stack>
        </Modal>
    )
}

export default ConformationDialog