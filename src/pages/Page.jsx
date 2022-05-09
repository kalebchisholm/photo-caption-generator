import { Heading, Text, Flex, Center } from '@chakra-ui/react'
import { Inputbar } from '../components/Inputbar'
import { Results } from '../components/Results'
export function Page() {
  return (
    <Center>
      <Flex direction='column' bg='centerBg' px='50px' h='100vh'>
        <Heading textAlign='center'>
          Welcome to the Photo Caption Generator
        </Heading>
        <Text 
          textAlign='center' 
          w='600px' 
          mx='auto'
          my='15px'
          fontSize='xl'
        >
          Do you ever hesitate posting that amazing 
          photo you took because you can't come up 
          with a caption? Enter a description of the 
          theme/genre of your photo and we'll give 
          you a caption idea!
        </Text>
        <Inputbar />
        <Results />
      </Flex>
    </Center>
  )
}
