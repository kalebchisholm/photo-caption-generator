/** 
 * FILE: PresetAccordion.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/17/2022
 * 
 * PURPOSE: Function component for the container which displays all of the
 *          presets in an accordion.
 * 
 * PROPS: 
 *   onClick - The function to pass to the Preset components, passed as 
 *             handleChange from captionForm.jsx.
*/


// ------------------------------- IMPORTS ------------------------------------
import { 
  Accordion, 
  AccordionButton, 
  AccordionItem, 
  AccordionPanel, 
  Text,
  Flex
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Preset } from "../components/Preset";
import { presetData } from '../data/Data'


// ------------------------------ FUNCTION ------------------------------------
export function PresetAccordion(props) {

  return (
    <Accordion allowToggle mt='10px'>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            {isExpanded ? (
              <>
                <AccordionButton 
                  border='2pt solid black' 
                  borderTopRadius='lg'
                  _hover={{
                    bg: 'btnHoverColor'
                  }}
                >
                  <Text 
                    fontWeight='semibold' 
                    flex='1' 
                    textAlign='left'
                  >
                    Hide Presets
                  </Text>
                  <AiOutlineMinus />
                </AccordionButton>
              </>
            ) : (
              <>
                <AccordionButton 
                  border='2pt solid black' 
                  borderRadius='lg'
                  _hover={{
                    bg: 'btnHoverColor'
                  }}
                >
                  <Text 
                    fontWeight='semibold' 
                    flex='1' 
                    textAlign='left'
                  >
                    View Presets
                  </Text>
                  <AiOutlinePlus />
                </AccordionButton>
              </>
            )}
            <AccordionPanel
              border='2pt solid black'
              borderTopStyle='none'
              borderBottomRadius='lg'
              bg='presetBg'
            >
              <Flex 
                maxW='55em' 
                flexWrap='wrap' 
                justifyContent='center' 
                mt='10px'
              >
                {
                  presetData.map((content) => (
                    <Preset 
                      key={content} 
                      data={content} 
                      onClick={props.onClick} 
                    />
                  ))
                }
              </Flex>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
