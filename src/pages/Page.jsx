// FILE: Page.jsx
// PURPOSE: The page for the entire application. Contains all containers and
//          components.

// ------------------------------ IMPORTS -------------------------------------
import { Heading, Text, Flex, Center } from '@chakra-ui/react'
import { Inputbar } from '../components/Inputbar'


// ----------------------------- FUNCTION -------------------------------------
export function Page() {
  return (
    // <Center>
      <Flex direction='column' px='50px' h='100vh'>
        <Heading>
          Welcome to the Photo Caption Generator 📷
        </Heading>
        <Text
          my='15px'
          fontSize='xl'
        >
          Do you ever hesitate posting that amazing 
          photo you took because you can't come up 
          with a caption? Enter a theme/genre or noun
          that best describes your photo and we'll use
          artificial intelligence to give you a 
          caption idea for your post!
        </Text>
        <Inputbar />
      </Flex>
    // </Center>
  )
}
