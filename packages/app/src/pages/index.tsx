import Head from 'next/head'
import { Flex, Heading } from '@chakra-ui/react'
import { Logo } from '@/component/logo'
import { Hero } from '@/component/hero'
import { Page } from '@/component/page'

export default function Home() {
  return (
    <Page
      backgroundImage="https://i0.wp.com/www.3dart.it/wp-content/uploads/2020/06/PS5-teaser_Still005.jpg?resize=1536%2C864&ssl=1"
      backgroundSize="cover"
      p={6}
      justifyContent="space-between"
    >
      <Logo />
      <Hero />
    </Page>
  )
}

