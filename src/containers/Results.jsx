/** 
 * FILE: Results.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/12/2022
 * 
 * PURPOSE: Function component for the container which displays all of the
 *          captions that are generated.
*/


// ------------------------------- IMPORTS ------------------------------------
import { CaptionCard } from "../components/CaptionCard"
import { Box, Center, Text, Stack } from "@chakra-ui/react"


// ------------------------------ FUNCTION ------------------------------------
export function Results({captions}) {

  let keyNumber = 0    // CaptionCard mapping key

  return (
    <Center>
      <Stack 
        mt='10px' 
        mb={{base: '40px'}}
        px='10px'
      >
        <Text
          fontSize='xl'
          fontWeight='semibold'
        >
          Results:
        </Text>
        <Box
          borderRadius='lg'
          borderTopRadius='none'
          borderTop='2pt solid black'
          m='10px'
          maxW={{lg:'62em'}}
          maxH={{base: '60vh', sm:'40vh'}}
          overflow='auto'
        >
          {
            captions.map((caption) => (
              <CaptionCard 
                key={keyNumber++}
                themes={caption.themes} 
                data={caption.text}
              />
            ))
          }
        </Box>
      </Stack>
    </Center>
  )
}
