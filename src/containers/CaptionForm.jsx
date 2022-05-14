/** 
 * FILE: CaptionForm.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/14/2022
 * 
 * PURPOSE: Function component for the form which the user generates
 *          captions from and container for <Presets/>.
*/


// ------------------------------- IMPORTS ------------------------------------
import { useState } from 'react'
import { 
  Grid, 
  Input, 
  Flex, 
  Button,
  Box
} from '@chakra-ui/react'
import { PresetAccordion } from './PresetAccordion'

const { Configuration, OpenAIApi } = require("openai");


// ------------------------------ FUNCTION ------------------------------------
export function CaptionForm(props) {

  const [caption, setCaption] = useState('')         // returned captions
  const [loading, setLoading] = useState(false)      // results loading

  // Handle change in input bar
  const handleChange = e => {
    setCaption(e.target.value)
  }

  // Handle submission of input
  const handleSubmit = e => {
    e.preventDefault()
    if (!caption || /^\s*$/.test(caption)) return  // prevent empty submissions
    setLoading(true)      // stop further submissions until results complete loading
    
    // OPENAI CONFIGURATION
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_SECRET
    });
    const openai = new OpenAIApi(configuration)

    // FETCH OPENAI 
    openai.createCompletion("text-curie-001", {
      prompt: `Write a creative and simple photo caption for a post on social media that involves the following genres: ${caption}.`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      props.setResults(true)   // results have been returned
      props.onSubmit({
        topic: caption,
        text: response.data.choices[0].text
      })
      setCaption('')      // clear input bar
      setLoading(false)   // allow for more submissions
    })
  }

  return (
    <Box>
      <Grid templateColumns={{base: '1fr', md: '1fr auto'}}>
        <Input
          id='search' 
          type='search' 
          bg='white'
          border='2pt solid black !important'
          placeholder='Enter your prompt'
          value={caption}
          onChange={handleChange}
        />
        <Flex justify='space-evenly'>
          <Button
            isLoading={loading}
            type='submit'
            onClick={handleSubmit}
            ml={{md: '10px'}}
            mt={{base: '10px', md: '0'}}
            bg='btnColor'
            w='full'
            border='2pt solid black'
            _hover={{
              bg: 'btnHoverColor'
            }}
          >
            Generate Caption
          </Button>
        </Flex>
      </Grid>
      <PresetAccordion onClick={handleChange} />
    </Box>
  )
}