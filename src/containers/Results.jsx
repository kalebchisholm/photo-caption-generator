import { CaptionCard } from "../components/CaptionCard"
import { Box, Center, Text, Stack } from "@chakra-ui/react"

export function Results({captions}) {

  let keyNumber = 0

  return (
    <Center>
      <Stack mt='20px'>
        <Text>
          Results:
        </Text>
        <Box
          borderRadius='lg'
          borderTopRadius='none'
          borderTop='2pt solid black'
          m='10px'
          w='50vw'
          maxH='45vh'
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
