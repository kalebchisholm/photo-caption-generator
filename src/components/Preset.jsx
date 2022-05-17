/** 
 * FILE: Preset.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/16/2022
 * 
 * PURPOSE: Function component for a preset which the user can click on
 *          to quickly enter prompts for the generator.
 * 
 * PROPS:
 *   data - The value and text content of the button which corresponds to
 *          one of the selectable preset options.
 *   onClick - The function to invoke, passed as handleChange from
 *             captionForm.jsx.
*/

// ------------------------------- IMPORTS ------------------------------------
import { Button } from '@chakra-ui/react'


// ------------------------------ FUNCTION ------------------------------------
export function Preset(props) {
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
