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
import { Grid, GridItem, Text } from "@chakra-ui/react";


// ------------------------------ FUNCTION ------------------------------------
export function CaptionCard(props) {
  return (
    <GridItem
      bg='white'
      borderRadius='lg'
      my='20px'
      p='10px'
      shadow='5px 5px 5px #949494'
      w='full'
    >
      <Grid templateColumns='auto 1fr' gap='10px'>
        <Text fontWeight='bold'>Topic(s):</Text>
        <Text>{props.topic}</Text>
        <Text fontWeight='bold'>Caption:</Text>
        <Text>{props.data}</Text>
      </Grid>
    </GridItem>
  )
}
