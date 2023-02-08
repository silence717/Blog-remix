import { useState } from 'react'
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme, Group, ActionIcon, useMantineColorScheme,
} from '@mantine/core'
import {MainLinks} from "./MainLink"
import {User} from "./User"
import {Logo} from "./Logo"
import {IconMoonStars, IconSun} from "@tabler/icons-react"

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const [opened, setOpened] = useState(false)

    return (
        <AppShell
            styles={{
                root: {
                    background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Navbar.Section grow mt="xs">
                        <MainLinks />
                    </Navbar.Section>
                    <Navbar.Section>
                        <User />
                    </Navbar.Section>
                </Navbar>
            }
            footer={
                <Footer height={60} p="md" ta="center">
                    <Text c="dimmed">❤️ Life is a long long journey, but I love it and code 🙈 ｜ 杨小白🏓@2023</Text>
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Group px={20} position="apart">
                            <Logo colorScheme={colorScheme} />
                            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                                {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
                            </ActionIcon>
                        </Group>
                    </MediaQuery>
                </Header>
            }
        >
            <Text size="xl" weight={500}>
                欢迎来到杨小白的博客～
            </Text>
            <Text size="md" color="dimmed" weight={500}>
                还没有想好要写点什么，暂时放着
            </Text>
        </AppShell>
    )
}
