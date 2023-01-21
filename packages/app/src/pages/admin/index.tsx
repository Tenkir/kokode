import { Navigation } from "@/component/navigation"
import { Page } from "@/component/page"
import { RichTextEditor } from "@/component/richTextEditor"
import { Heading, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"

export default function Admin() {
  return (
    <Page>
      <Navigation />
      <Flex p={6} direction="column" gap={2}>
        <Heading>ADMIN</Heading>
        <Heading size="l" as="h2">Create New Blogpost</Heading>
        <form>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" id="title" />
          </FormControl>
          <FormControl>
            <FormLabel>Subtitle</FormLabel>
            <Input name="subtitle" id="subtitle" />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input name="imageUrl" id="imageUrl" />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <RichTextEditor />
          </FormControl>
        </form>
      </Flex>
    </Page>
  )
}
