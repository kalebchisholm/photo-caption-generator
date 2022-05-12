import { useState } from "react"
import { Results } from "../containers/Results"
import { CaptionForm } from "../containers/CaptionForm"
import { Heading, Text, Flex } from '@chakra-ui/react'

export function CaptionList() {

  const [captions, setCaptions] = useState([])

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
        mt='20px' 
        mx='auto' 
        borderRadius='full' 
        w='50vw'
        shadow='5px 5px 5px #949494'
      >
        Welcome to the Photo Caption Generator 📷
      </Heading>
      <Text
        mx='auto'
        textAlign='justify'
        p='20px'
        fontSize='2xl'
        fontWeight='semibold'
        w='50vw'
      >
        Do you ever hesitate posting that amazing 
        photo you took because you can't come up 
        with a caption? Enter a theme/genre or noun
        that best describes your photo and we'll use
        artificial intelligence to give you a 
        caption idea for your post! 🖼️
      </Text>
      <CaptionForm onSubmit={addCaption} />
      <Results captions={captions} />
    </Flex>
  )
}
