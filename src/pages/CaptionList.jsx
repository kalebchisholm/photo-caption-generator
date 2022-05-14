/** 
 * FILE: CaptionList.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/14/2022
 * 
 * PURPOSE: Function component for the page which contains the user form
 *          for the caption generator as well as displays presets and
 *          the caption results.
*/


// ------------------------------- IMPORTS ------------------------------------
import { useState } from 'react'
import { Results } from '../containers/Results'
import { CaptionForm } from '../containers/CaptionForm'
import { Heading, Text, Flex, Box, Center } from '@chakra-ui/react'


// ------------------------------ FUNCTION ------------------------------------
export function CaptionList() {

  const [captions, setCaptions] = useState([])    // returned captions
  const [isResults, setResults] = useState(false) // conditional <Results/> rendering

  // add to list of captions
  const addCaption = caption => {
    setCaptions([caption, ...captions])
  }

  return (
    <Center>
      <Flex direction='column' m='20px' mt='2vw' maxW='62em'>
        <Heading 
          textAlign='center'
          bg='primary' 
          p='10px'
          borderRadius='full'
          shadow='5px 5px 5px #949494'
        >
          Photo Caption Generator 📷
        </Heading>
        <Text textAlign='center' my='15px' fontSize='lg' fontWeight='semibold'>
          Enter themes, genres, nouns, hashtags, or brief sentences
          that best describe your photo (seperate using commas):
        </Text>
        <CaptionForm onSubmit={addCaption} setResults={setResults}/>
        <Box>
          {
            !isResults &&
            <Text
              textAlign='center'
              opacity='0.6'
              mt='50px'
              fontSize='lg'
              fontWeight='semibold'
            >
              Provide prompts to the caption generator to see results
            </Text>
          }
        </Box>
        <Box>{isResults && <Results captions={captions} />}</Box>
      </Flex>
    </Center>
  )
}
