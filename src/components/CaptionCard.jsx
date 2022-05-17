/** 
 * FILE: CaptionCard.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/16/2022
 * 
 * PURPOSE: Function component for a caption that is returned from
 *          the generator.
 * 
 * PROPS:
 *   themes - The user input for displaying the original prompt in the result.
 *   data - The result of the prompt from the API.
*/

// ------------------------------- IMPORTS ------------------------------------
import { Grid, GridItem, Box, Text, Button, useToast } from "@chakra-ui/react";
import { MdContentCopy } from 'react-icons/md'

// ------------------------------ FUNCTION ------------------------------------
export function CaptionCard(props) {

  const toast = useToast()

  return (
    <GridItem
      bg='white'
      borderRadius='lg'
      my='20px'
      p='10px'
      shadow='5px 5px 5px #949494'
      w='full'
    >
      <Grid templateColumns='auto 1fr auto' gap='10px'>
        <Text fontWeight='bold'>Topic(s):</Text>
        <Text>{props.topic}</Text>
        <Box></Box>
        <Text fontWeight='bold'>Caption:</Text>
        <Text>{props.data}</Text>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(props.data)
            toast({
              title: 'Caption Copied to Clipboard',
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
          }}
          borderRadius='full'
          h='50px'
          bg='presetBg'
          _hover={{
            bg: 'btnHoverColor'
          }}
        >
          <MdContentCopy fontSize='14pt'/>
        </Button>
      </Grid>
    </GridItem>
  )
}
