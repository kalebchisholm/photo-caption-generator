import { Button } from '@chakra-ui/react'

export function Presets(props) {
  return (
    <Button 
      value={props.data} 
      onClick={props.onClick}
      m='5px'
      shadow='5px 5px 5px #949494'
      bg='secondary'
      _hover={{
        bg:'btnHoverColor'
      }}
    >
      {props.data}
    </Button>

  )
}
