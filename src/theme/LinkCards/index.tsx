import {Box, Container, SimpleGrid, Button} from '@chakra-ui/react'
import * as React from 'react'
import {Stat} from './Card'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../theme'
const stats = [
  {label: 'Total Subscribers', value: '71,887'},
  {label: 'Avg. Open Rate', value: '56.87%'},
  {label: 'Avg. Click Rate', value: '12.87%'}
]

interface CardsProps {
  cards: {
    to: string
    label: string
    description: string
  }[]
}

const LinkCards = (props: CardsProps) => (
  <ChakraProvider theme={theme}>
    <Box as="section" py={{base: '4', md: '8'}}>
      <Container>
        <SimpleGrid columns={{base: 1, md: 3}} gap={{base: '5', md: '6'}}>
          {props.cards.map(({label, description, to}, index) => (
            <Stat key={index} label={label} description={description} to={to} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  </ChakraProvider>
)

export default LinkCards
