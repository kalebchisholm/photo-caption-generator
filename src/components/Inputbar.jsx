// FILE: Inputbar.jsx
// PURPOSE: The form which takes user input.
// ------------------------------ IMPORTS -------------------------------------
import { useState } from 'react'
import { 
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Grid
} from '@chakra-ui/react'
import { 
  Formik, 
  Form, 
  Field 
} from 'formik'
import { CaptionCard } from './CaptionCard'
import { captionData } from '../data/Data'

const { Configuration, OpenAIApi } = require("openai");
// ------------------------------ FUNCTION ------------------------------------
export function Inputbar() {
  let count = 0
  const [captionList, setCaption] = useState([])

  function addCaption(content) {
    console.log(content)
    setCaption([...captionList, content])
  }

  function validateInput(value) {
    let error
    if (!value) {
      error = 'Required'
    }
    return error
  }

  return (
    <>
      <Formik
        initialValues={{ theme: '' }}
        onSubmit={(values) => {

          const configuration = new Configuration({
            apiKey: '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',
          });

          const openai = new OpenAIApi(configuration);

          openai.createCompletion("text-curie-001", {
            prompt: `Write a caption for a photo about the following topics: ${values.theme}.`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
            // captionData.push(response.data.choices[0].text)
            addCaption(response.data.choices[0].text)
            // console.log(captionData)
          });
        }}
      >
        <Form>
          <Grid templateColumns='3fr 1fr' p='20px'>
            <Field name='theme' validate={validateInput}>
              {({ field, form }) => (
                <FormControl 
                  isInvalid={
                    form.errors.name && form.touched.name
                  }
                >
                  <FormLabel htmlFor='theme'>
                    Enter a genre, theme, or noun:
                  </FormLabel>
                  <Input {...field} id='theme' placeholder='genre/theme/noun' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type='submit'
              mt={8}
              ml='10px'
              bg='btnColor'
              border='2pt solid black'
              _hover={{
                bg: 'btnHoverColor'
              }}
            >
              Generate Caption
            </Button>
          </Grid>
        </Form>
      </Formik>
      <Grid
        m='20px'
        gap='5px'
        minH='fit-content'
        maxH='100vh'
      >
        {
          captionData.map((content) => 
            <CaptionCard key={count++} data={content}/>
          )
        }
      </Grid>
    </>
  )
}