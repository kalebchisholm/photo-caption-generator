import { useState } from 'react'
import { 
  Grid, 
  Input, 
  Flex, 
  Button, 
  Center, 
  Box
} from '@chakra-ui/react'
import { Presets } from '../components/Presets';

const { Configuration, OpenAIApi } = require("openai");

// ------------------------------ FUNCTION ------------------------------------
export function CaptionForm(props) {

  const [caption, setCaption] = useState('')

  const handleChange = e => {
    setCaption(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!caption) {
      return
    }

    const configuration = new Configuration({
      apiKey: '',
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
      props.onSubmit({
        themes: caption,
        text: response.data.choices[0].text
      })
      setCaption('')
    })
  }

  return (
    <Center>
      <Box w='50vw'>
        <Grid templateColumns='1fr auto'>
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
              type='submit'
              onClick={handleSubmit}
              bg='btnColor'
              border='2pt solid black'
              ml='10px'
              _hover={{
                bg: 'btnHoverColor'
              }}
            >
              Generate Caption
            </Button>
          </Flex>
        </Grid>
        <Flex flexWrap='wrap' justifyContent='space-evenly' mt='10px'>
          <Presets data={'Food'} onClick={handleChange} />
          <Presets data={'Family'} onClick={handleChange} />
          <Presets data={'Friends'} onClick={handleChange} />
          <Presets data={'Outdoors'} onClick={handleChange} />
          <Presets data={'Scenery'} onClick={handleChange} />
          <Presets data={'Movies'} onClick={handleChange} />
          <Presets data={'Parties'} onClick={handleChange} />
          <Presets data={'Reading'} onClick={handleChange} />
          <Presets data={'Cars'} onClick={handleChange} />
          <Presets data={'Beach'} onClick={handleChange} />
          <Presets data={'Video Games'} onClick={handleChange} />
          <Presets data={'Hanging out by the beach'} onClick={handleChange} />
          <Presets data={'Barbeque and Family'} onClick={handleChange} />
          <Presets data={'Cute Animals'} onClick={handleChange} />
          <Presets data={'Fun in the sun'} onClick={handleChange} />
          <Presets data={'Music'} onClick={handleChange} />
          {/* // TODO: add some more, ALSO try #'s and other short sentences! */}
        </Flex>
      </Box>
    </Center>
  )
}