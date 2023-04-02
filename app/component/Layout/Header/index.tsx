import React, { useState } from 'react'
import type { FC } from 'react'
import { Header, Container, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import useStyles from './style'
import { Link } from '@remix-run/react'

const links = [
  { link: '/', label: 'Home' },
  { link: '/tech', label: 'Tech' },
  { link: '/me', label: 'Me' },
]

type Props = {}

const BlogHeader: FC<Props> = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <Link key={link.link} to={link.link}>
      <a key={link.label} className={cx(classes.link, { [classes.linkActive]: active === link.link })}>
        {link.label}
      </a>
    </Link>
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
