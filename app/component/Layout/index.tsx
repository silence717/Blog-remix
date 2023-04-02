import type { FC, PropsWithChildren } from 'react'
import { AppShell, Center, useMantineColorScheme, useMantineTheme } from '@mantine/core'

import BlogHeader from './Header'
import BlogFooter from './Footer'

type Props = PropsWithChildren & {}

const Layout: FC<Props> = ({ children }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <AppShell
      styles={{
        root: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      footer={<BlogFooter />}
      header={<BlogHeader />}
    >
      <Center h="100%">{children}</Center>
    </AppShell>
  )
}

export default Layout
