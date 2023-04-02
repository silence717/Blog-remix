import React from 'react'
import { Stack, Text, Title } from '@mantine/core'
import { Layout } from '~/component'

const Me = () => {
  return (
    <Layout>
      <Stack spacing="sm">
        <Title order={2}>欢迎来到杨小白的博客😄😄</Title>
        <Text size="md" color="dimmed" weight={500}>
          还没有想好要写点什么，暂时放着
        </Text>
      </Stack>
    </Layout>
  )
}

export default Me
