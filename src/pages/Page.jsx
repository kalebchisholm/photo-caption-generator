// FILE: Page.jsx
// PURPOSE: The page for the entire application. Contains all containers and
//          components.

// ------------------------------ IMPORTS -------------------------------------
import { Heading, Text, Flex } from '@chakra-ui/react'
import { Inputbar } from '../components/Inputbar'
import { Results } from '../containers/Results'
import { captionData } from '../data/Data'
// ----------------------------- FUNCTION -------------------------------------
export function Page() {

  return (
      <Flex direction='column' h='100vh'>
        <Heading bg='btnHoverColor' p='20px'>
          Welcome to the Photo Caption Generator 📷
        </Heading>
        <Text
          p='20px'
          fontSize='2xl'
          fontWeight='semibold'
        >
          Do you ever hesitate posting that amazing 
          photo you took because you can't come up 
          with a caption? Enter a theme/genre or noun
          that best describes your photo and we'll use
          artificial intelligence to give you a 
          caption idea for your post! 🖼️
        </Text>
        <Inputbar />
        {/* <Results data={captionData}/> */}
      </Flex>
  )
}
