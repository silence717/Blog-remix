import React from 'react'
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core'

export function User() {
    const theme = useMantineTheme()

    return (
        <Box
            sx={{
                paddingTop: theme.spacing.sm,
                borderTop: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/8267830?v=4"
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            杨小白
                        </Text>
                        <Text color="dimmed" size="xs">
                            yangfang2028@126.com
                        </Text>
                    </Box>
                </Group>
            </UnstyledButton>
        </Box>
    );
}
