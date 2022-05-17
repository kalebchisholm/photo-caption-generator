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
import { Heading, Text, Flex, Box, Center, Button, Stack } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

// ------------------------------ FUNCTION ------------------------------------
export function CaptionList() {

  const [captions, setCaptions] = useState([])    // returned captions
  const [isResults, setResults] = useState(false) // conditional <Results/> rendering

  // add to list of captions
  const addCaption = caption => {
    setCaptions([caption, ...captions])
  }

  const clearCaptions = () => {
    setCaptions([])
    setResults(false)
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
        {
          isResults &&
          <Stack mt='10px'>
            <Flex justify='space-between'>
              <Text
                fontSize='xl'
                fontWeight='semibold'
                pl='10px'
                mt='10px'
              >
                Results:
              </Text>
              <Button
                onClick={clearCaptions}
                bg='btnColor'
                border='2pt solid black'
                _hover={{
                  bg: 'btnHoverColor'
                }}
                mx='10px'
              >
                <FaTrashAlt /> 
                <Text pl='5px' pb='1px'>
                  Clear Captions
                </Text> 
              </Button>
            </Flex>
            <Box>{isResults && <Results captions={captions} />}</Box>
          </Stack>
        }
      </Flex>
    </Center>
  )
}
