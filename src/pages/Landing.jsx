import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Landing() {
  return (
    <Box>
      <Heading textAlign='center' fontSize='5xl' mt='15vh'>
        Welcome to the Photo Caption Generator 📷
      </Heading>
      <Text
        mx='auto'
        mt='20px'
        w='50vw'
        fontSize='2xl'
        fontWeight='semibold'
      >
        Do you ever hesitate posting that amazing 
        photo you took because you can't come up 
        with a caption? Enter one or more themes, 
        genres, nouns, or even enter a hashtag or
        sentence that best describes your photo.
        We'll use artificial intelligence to give 
        you a caption idea for your post! 🖼️
      </Text>
      <Center>
        <Button
          as={Link}
          to='/generator'
          p='40px'
          mt='50px'
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
