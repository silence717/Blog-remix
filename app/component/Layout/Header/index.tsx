import type { FC } from 'react'
import React from 'react'
import { Header, Container, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink } from '@remix-run/react'
import useStyles from './style'

const links = [
  { link: '/tech', label: 'Tech' },
  { link: '/me', label: 'Me' },
]

type Props = {}

const BlogHeader: FC<Props> = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <NavLink
      key={link.link}
      to={link.link}
      className={({ isActive }) => {
        return cx(classes.link, { [classes.linkActive]: isActive })
      }}
    >
      {link.label}
    </NavLink>
  ))

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  )
}

export default BlogHeader
