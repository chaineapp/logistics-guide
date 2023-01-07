import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../theme'
// Default implementation, that you can customize
export default function Root({children}) {
  return <ChakraProvider theme={theme}>{children} </ChakraProvider>
}
