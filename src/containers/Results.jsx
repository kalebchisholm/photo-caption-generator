/** 
 * FILE: Results.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/14/2022
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
      <Stack mt='10px' mb='40px'>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          pl='10px'
        >
          Results:
        </Text>
        <Box
          borderTop='2pt solid black'
          w={{sm: '30em', md: '45em', lg: '57em'}}
          maxH={{base: '60vh', sm:'40vh'}}
          overflowY='auto'
          pr='10px'
        >
          {
            captions.map((caption) => (
              <CaptionCard 
                key={keyNumber++}
                themes={caption.topic} 
                data={caption.text}
              />
            ))
          }
        </Box>
      </Stack>
    </Center>
  )
}
