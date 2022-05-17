/** 
 * FILE: CaptionCard.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/17/2022
 * 
 * PURPOSE: Function component that displays the original prompt, the resulting 
 *          caption, and a copy to clipboard button.
 * 
 * PROPS:
 *   topic - The user input for displaying the original prompt in the result.
 *   data - The result of the prompt from the API.
*/

// ------------------------------- IMPORTS ------------------------------------
import { 
  Grid, 
  GridItem, 
  Box, 
  Text, 
  Button, 
  useToast 
} from "@chakra-ui/react";
import { MdContentCopy } from 'react-icons/md'

// ------------------------------ FUNCTION ------------------------------------
export function CaptionCard(props) {

  const toast = useToast()

  return (
    <GridItem
      w='full'
      bg='white' 
      borderRadius='lg' 
      my='20px' 
      p='10px' 
      shadow='5px 5px 5px #949494' 
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
          _hover={{
            bg: 'btnHoverColor'
          }}
          borderRadius='full' h='50px' bg='presetBg'
        >
          <MdContentCopy fontSize='14pt'/>
        </Button>
      </Grid>
    </GridItem>
  )
}
