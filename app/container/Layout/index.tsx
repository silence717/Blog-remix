import React, { useEffect } from 'react'
import useHowxm from 'react-use-howxm'
import { Layout } from '../../component'

const LayoutEntry = () => {
  const { initHowxm } = useHowxm()

  useEffect(() => {
    initHowxm('7274c163-0649-4356-8ce2-588c7bf4ead6')
  }, [])

  return <Layout />
}

export default LayoutEntry
