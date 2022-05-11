// FILE: Inputbar.jsx
// PURPOSE: The form which takes user input.
import { Results } from '../containers/Results';
// import { useContext, useState } from 'react'
// import { SearchContext } from '../context/search'
// ------------------------------ IMPORTS -------------------------------------
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

const { Configuration, OpenAIApi } = require("openai");
// ------------------------------ FUNCTION ------------------------------------
export function Inputbar() {

  function validateInput(value) {
    let error
    if (!value) {
      error = 'Required'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values) => {
        console.log(values.name) // ! <-- REMOVE
        const configuration = new Configuration({
          apiKey: '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',
        });

        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
          prompt: `Write a caption for a photo about the following topics: ${values.name}.`,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((response) => {
          // this.setState({
          //   heading: `Suggested caption for your post about: ${values}`,
          //   response: `${response.data.choices[0].text}`
          // })
          console.log(response.data.choices[0].text) // ! <-- REMOVE
        });
      }}
    >
      <Form>
        <Grid templateColumns='3fr 1fr'>
          <Field name='name' validate={validateInput}>
            {({ field, form }) => (
              <FormControl 
                isInvalid={
                  form.errors.name && form.touched.name
                }
              >
                <FormLabel htmlFor='name'>
                  Enter a genre, theme, or noun:
                </FormLabel>
                <Input {...field} id='name' placeholder='name' />
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
  )
}

 // const search = useContext(SearchContext)
  // const [input, setInput] = useState('')

  // const handleSearch = (event) => {
  //   event.preventDefault()
  //   search.search(input).then((data) => {
  //     search.setData(data.results)
  //     localStorage.setItem('myData', JSON.stringify(data.results))
  //   })
  // }

  // return (
  //   <Grid 
  //     templateColumns='2fr 1fr'
  //     border='1pt solid black' 
  //     borderRadius='lg'
  //     p='10px'
  //     my='10px'
  //   >
  //     <FormControl>
  //       <Input
  //         id='search' 
  //         type='search'
  //         border='2pt solid black !important'
  //         placeholder='Enter theme/genre'
  //         // value={input}
  //         // onChange={(event) => setInput(event.target.value)}
  //       />
  //       <FormHelperText>
  //         Please enter single words for best results.
  //       </FormHelperText>
  //     </FormControl>
  //     <Flex justify='space-evenly'>
  //       <Button 
  //         mr='10px' 
  //         ml='10px'
  //         w='full'
  //         border='2pt solid black'
  //         type='submit'
  //         _hover={{
  //           bgColor:'btnHoverColor'
  //         }}
  //         bg='btnColor'
  //         // onClick={handleSearch}
  //       >
  //         Generate Caption
  //       </Button>
  //     </Flex>
  //   </Grid>
  // )