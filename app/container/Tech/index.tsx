import React from 'react'
import type { FC } from 'react'
import { Card, Grid, Group, Image, Text } from '@mantine/core'

export type Post = { id: string; slug: string; title: string; date: string }

type Props = {
  posts: Post[]
}

const Posts: FC<Props> = ({ posts }) => {
  return (
    <Grid>
      {posts?.map((post, index) => (
        <Grid.Col span={2} key={index}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{post.title}</Text>
              <Text size="sm" color="dimmed">
                posted on {post.date}
              </Text>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default Posts
