import { GridItem } from "@chakra-ui/react";

export function CaptionCard(props) {
  return (
    <GridItem
      border='2pt solid black'
      borderRadius='lg'
      h='fit-content'
    >
      {props.data}
    </GridItem>
  )
}
