import { useState } from "react"
import { Results } from "../containers/Results"
import { CaptionForm } from "../containers/CaptionForm"
import { Heading, Text, Flex, Box, Divider } from '@chakra-ui/react'

export function CaptionList() {

  const [captions, setCaptions] = useState([])
  const [isResults, setResults] = useState(false)

  const addCaption = caption => {
    if(!caption.text || /^\s*$/.test(caption.text)) {
      return
    }

    const newCaptions = [caption, ...captions]

    setCaptions(newCaptions)
  }

  return (
    <Flex direction='column' h='100vh'>
      <Heading 
        textAlign='center'
        bg='primary' 
        p='20px' 
        m='20px' 
        mx='auto' 
        borderRadius='full' 
        w='fit-content'
        shadow='5px 5px 5px #949494'
      >
        Photo Caption Generator 📷
      </Heading>
      <Text
        mx='auto'
        my='20px'
        w='50vw'
        fontSize='2xl'
        fontWeight='semibold'
      >
        Enter one or more themes, genres, or nouns. You can also
        enter a hashtag or sentence that best describes your photo:
      </Text>
      <CaptionForm onSubmit={addCaption} setResults={setResults}/>
      <Box>
        {
          !isResults &&
          <Text
            w='fit-content'
            my='70px'
            mx='auto'
            fontSize='xl'
            fontWeight='semibold'
            opacity='0.6'
          >
            Provide prompts to the caption generator to see results
          </Text>
        }
      </Box>
      <Box>{isResults && <Results captions={captions} />}</Box>
    </Flex>
  )
}
