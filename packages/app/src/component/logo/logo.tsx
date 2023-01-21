import { supplyMono } from "@/fonts"
import { Flex, Text } from "@chakra-ui/react"

export const Logo = () => {
  return (
    <Flex direction="column">
      <Text
        fontSize="2em"
        fontWeight="400"
        lineHeight="1em"
        letterSpacing="0.25em"
        className={supplyMono.className}
      >
        K0KODE
      </Text>
      <Text
        fontWeight="200"
        fontSize=".75em"
        lineHeight="0.875em"
        className={supplyMono.className}
      >
        Technologist - Fabricator
      </Text>
    </Flex>
  )
}
