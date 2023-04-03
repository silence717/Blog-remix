import React from 'react'
import { useLoaderData } from '@remix-run/react'
import Posts from '../container/Tech'

const NOTION_BLOG_ID = '24e4127d0f434b81b9a1248ef100848a'

export type Post = { id: string; slug: string; title: string; date: string }

export const getAllPosts = async () => {
  return await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)
}

export const loader = async () => {
  return getAllPosts()
}

const Tech = () => {
  const posts: Post[] = useLoaderData<typeof loader>()

  return <Posts posts={posts} />
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
export default Tech
