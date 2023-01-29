import { Text, Stack } from "@mantine/core";

export default function Index() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        欢迎来到杨小白的博客～
      </Text>
      <Text size="md" color="dimmed" weight={500}>
        还没有想好要写点什么，暂时放着
      </Text>
    </Stack>
  )
}
