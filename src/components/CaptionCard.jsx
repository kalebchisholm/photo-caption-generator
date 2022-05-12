import { Grid, GridItem, Text } from "@chakra-ui/react";

export function CaptionCard(props) {
  return (
    <GridItem
      bg='white'
      borderRadius='lg'
      my='20px'
      mr='10px'
      p='10px'
      shadow='5px 5px 5px #949494'
    >
      <Grid templateColumns='auto 1fr' gap='10px'>
        <Text fontWeight='bold'>Topic(s):</Text>
        <Text>{props.themes}</Text>
        <Text fontWeight='bold'>Caption:</Text>
        <Text>{props.data}</Text>
      </Grid>
    </GridItem>
  )
}
