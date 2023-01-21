import { Heading } from "@chakra-ui/react"

export const Hero = () => {
  const textStyle = {
    fontSize: '128px',
    letterSpacing: '0.15em',
    fontWeight: '400'
  }

  return (
    <div>
      <Heading {...textStyle}>Hack</Heading>
      <Heading {...textStyle}>Break</Heading>
      <Heading {...textStyle}>Build</Heading>
    </div>
  )
}
