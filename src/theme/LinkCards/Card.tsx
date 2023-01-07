import {Box, Heading, VStack, Text, useBreakpointValue, Button} from '@chakra-ui/react'
import {useColorMode} from '@docusaurus/theme-common'
import * as React from 'react'
import Link from '@docusaurus/Link'
interface Props {
  label: string
  description: string
  to: string
}
export const Stat = (props: Props) => {
  const {label, description, to, ...boxProps} = props
  const {colorMode, setColorMode} = useColorMode()
  const textColor = colorMode === 'light' ? 'black' : 'white'
  console.log(colorMode)
  return (
    <Link to={to}>
      <Box
        px={{base: '4', md: '6'}}
        py={{base: '5', md: '6'}}
        bg="bg-surface"
        borderRadius="lg"
        boxShadow={colorMode === 'light' ? 'sm' : 'sm-dark'}
        {...boxProps}
      >
        <VStack>
          <Heading color={textColor} size={useBreakpointValue({base: 'sm', md: 'md'})}>
            {label}
          </Heading>
          <Text fontSize="sm" color={textColor}>
            {description}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}
