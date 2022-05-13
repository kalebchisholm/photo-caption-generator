
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
import { presetData } from '../data/presetData'

export function PresetAccordion(props) {

  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              {isExpanded ? (
                <>
                  <Text flex='1' textAlign='left'>Hide Presets</Text>
                  <AiOutlineMinus />
                </>
              ) : (
                <>
                  <Text flex='1' textAlign='left'>Expand Presets</Text>
                  <AiOutlinePlus/>
                </>
              )}
            </AccordionButton>
            <AccordionPanel>
              <Flex flexWrap='wrap' justifyContent='center' mt='10px'>
                {
                  presetData.map((content) => (
                    <Preset key={content} data={content} onClick={props.onClick} />
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
