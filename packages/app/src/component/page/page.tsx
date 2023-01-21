import { Flex, FlexProps } from "@chakra-ui/react";
import Head from "next/head"
import { FC, ReactNode } from "react";

interface PageProps extends FlexProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const Page: FC<PageProps> = ({
  title = "Technologist",
  description,
  children,
  ...flexProps
}) => {
  const titleContent = `K0KODE - ${title}`;

  return (
    <>
      <Head>
        <title>{titleContent}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        minH="100vh"
        h="full"
        w="full"
        direction="column"
        bgColor="background"
        {...flexProps}
      >
        {children}
      </Flex>
    </>
  );
};
