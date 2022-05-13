/** 
 * FILE: Landing.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/13/2022
 * 
 * PURPOSE: Function component for the landing (home) page which the user is
 *          first brought to upon reaching the app.
*/


// ------------------------------- IMPORTS ------------------------------------
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


// ------------------------------ FUNCTION ------------------------------------
export function Landing() {
  return (
    <Box>
      <Heading textAlign='center' fontSize='5xl' mt='10vw' px='20px'>
        Welcome to the Photo Caption Generator 📷
      </Heading>
      <Text
        textAlign='center'
        mx='auto'
        mt='20px'
        maxW={{md: '48em'}}
        px='40px'
        fontSize='2xl'
        fontWeight='semibold'
      >
        Do you ever hesitate posting that amazing photo you took because 
        you can't come up with a caption? Enter one or more themes, genres, 
        nouns, or even enter a hashtag or sentence that best describes your 
        photo. We'll use artificial intelligence to give you a caption idea 
        for your post! 🖼️
      </Text>
      <Center>
        <Button
          as={Link}
          to='/generator'
          p='40px'
          my='50px'
          fontSize='3xl'
          borderRadius='full'
          bg='btnColor'
          _hover={{
            bg: 'btnHoverColor'
          }}
          shadow='2px 2px 5px #949494'
        >
          Get Started
        </Button>
      </Center>
    </Box>
  )
}
