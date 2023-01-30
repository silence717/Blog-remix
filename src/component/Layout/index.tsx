import React from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import {AppShell, Navbar, Header, Group, ActionIcon, useMantineColorScheme, Text} from '@mantine/core';
import {MainLinks} from "./MainLink";
import {User} from "./User";
import {Logo} from "./Logo";

export default function Layout() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <AppShell
            padding="md"
            fixed={false}
            navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                    <Navbar.Section grow mt="xs">
                        <MainLinks />
                    </Navbar.Section>
                    <Navbar.Section>
                        <User />
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header height={60}>
                    <Group sx={{ height: '100%' }} px={20} position="apart">
                        <Logo colorScheme={colorScheme} />
                        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                            {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
                        </ActionIcon>
                    </Group>
                </Header>
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
        >
            <Text size="xl" weight={500}>
                欢迎来到杨小白的博客～
            </Text>
            <Text size="md" color="dimmed" weight={500}>
                还没有想好要写点什么，暂时放着
            </Text>
        </AppShell>
    );
}