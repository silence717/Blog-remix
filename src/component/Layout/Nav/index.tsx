import type { FC } from 'react'
import React from 'react'
import { Navbar } from '@mantine/core'
import { MainLinks } from './MainLink'
import { User } from '../User'

type Props = {
  hidden: boolean
}

const Nav: FC<Props> = ({ hidden }) => {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={hidden} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  )
}

export default Nav
