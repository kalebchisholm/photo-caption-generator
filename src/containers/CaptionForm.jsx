/** 
 * FILE: CaptionForm.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/12/2022
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
  Center, 
  Box
} from '@chakra-ui/react'
import { Preset } from '../components/Preset';

const { Configuration, OpenAIApi } = require("openai");

// ------------------------------ FUNCTION ------------------------------------
export function CaptionForm(props) {

  const [caption, setCaption] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setCaption(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!caption) {
      return
    }
    
    setLoading(true)
    
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_SECRET
    });

    const openai = new OpenAIApi(configuration)

    openai.createCompletion("text-curie-001", {
      prompt: `Write a creative and simple photo caption for a post on social media that involves the following genres: ${caption}.`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      props.setResults(true)
      props.onSubmit({
        themes: caption,
        text: response.data.choices[0].text
      })
      setCaption('')
      setLoading(false)
    })
  }

  return (
    <Center>
      <Box w={{lg: '50vw'}} m={{base: '5px 15px', md: '10px 60px'}}>
        <Grid templateColumns={{base: '1fr', md: '1fr auto'}}>
          <Input
            id='search' 
            type='search' 
            bg='white'
            border='2pt solid black !important'
            placeholder='Genre/Theme/Noun'
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
        <Flex flexWrap='wrap' justifyContent='center' mt='10px'>
          <Preset data={'Food'} onClick={handleChange} />
          <Preset data={'Family'} onClick={handleChange} />
          <Preset data={'Friends'} onClick={handleChange} />
          <Preset data={'Outdoors'} onClick={handleChange} />
          <Preset data={'Scenery'} onClick={handleChange} />
          <Preset data={'Movies'} onClick={handleChange} />
          <Preset data={'Parties'} onClick={handleChange} />
          <Preset data={'Reading'} onClick={handleChange} />
          <Preset data={'Cars'} onClick={handleChange} />
          <Preset data={'Beach'} onClick={handleChange} />
          <Preset data={'Video Games'} onClick={handleChange} />
          <Preset data={'Hanging out by the beach'} onClick={handleChange} />
          <Preset data={'Barbeque and Family'} onClick={handleChange} />
          <Preset data={'Cute Animals'} onClick={handleChange} />
          <Preset data={'Fun in the sun'} onClick={handleChange} />
          <Preset data={'Music'} onClick={handleChange} />
        </Flex>
      </Box>
    </Center>
  )
}