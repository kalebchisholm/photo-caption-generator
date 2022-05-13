/** 
 * FILE: CaptionList.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/12/2022
 * 
 * PURPOSE: Function component for the page which contains the user form
 *          for the caption generator as well as displays presets and
 *          the caption results.
*/


// ------------------------------- IMPORTS ------------------------------------
import { useState } from 'react'
import { Results } from '../containers/Results'
import { CaptionForm } from '../containers/CaptionForm'
import { Heading, Text, Flex, Box } from '@chakra-ui/react'


// ------------------------------ FUNCTION ------------------------------------
export function CaptionList() {

  const [captions, setCaptions] = useState([])    // returned captions
  const [isResults, setResults] = useState(false) // conditional <Results/> rendering

  const addCaption = caption => {
    // Quick input check + clear extra whitespace
    if (!caption.text || /^\s*$/.test(caption.text)) return
    // add to list of captions
    setCaptions([caption, ...captions])
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
        m='5px auto'
        w={{md: '70vw', lg: '60vw', xl: '50vw'}}
        px='20px'
        fontSize={{base: 'lg', lg: '2xl'}}
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
            textAlign='center'
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
