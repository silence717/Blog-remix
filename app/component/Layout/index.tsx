import { useDisclosure } from '@mantine/hooks'
import { AppShell, Center, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core'

import BlogHeader from './Header'
import BlogFooter from './Footer'

export default function Layout() {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const [opened, handlers] = useDisclosure(false)

  return (
    <AppShell
      styles={{
        root: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      footer={<BlogFooter />}
      header={<BlogHeader opened={opened} handlers={handlers} />}
    >
      <Center h="100%">
        <Stack spacing="sm">
          <Title order={2}>欢迎来到杨小白的博客😄😄</Title>
          <Text size="md" color="dimmed" weight={500}>
            还没有想好要写点什么，暂时放着
          </Text>
        </Stack>
      </Center>
    </AppShell>
  )
}
