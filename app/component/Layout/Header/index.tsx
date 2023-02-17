import type { FC } from 'react'
import React from 'react'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { ActionIcon, Burger, Group, Header, MediaQuery, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { Logo } from '../Logo'

type Props = {
  opened: boolean
  handlers: any
}

const BlogHeader: FC<Props> = ({ opened, handlers }) => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger opened={opened} onClick={() => handlers.toggle()} size="sm" color={theme.colors.gray[6]} mr="xl" />
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Group px={20} position="apart">
          <Logo />
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
            {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
          </ActionIcon>
        </Group>
      </MediaQuery>
    </Header>
  )
}

export default BlogHeader
