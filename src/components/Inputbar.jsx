// import { useContext, useState } from 'react'
// import { SearchContext } from '../context/search'
import { 
  FormControl,
  FormHelperText,
  Button,
  Input,
  Flex,
  Grid
} from '@chakra-ui/react'

// ------------------------------ FUNCTION ------------------------------------
export function Inputbar() {
  // const search = useContext(SearchContext)
  // const [input, setInput] = useState('')

  // const handleSearch = (event) => {
  //   event.preventDefault()
  //   search.search(input).then((data) => {
  //     search.setData(data.results)
  //     localStorage.setItem('myData', JSON.stringify(data.results))
  //   })
  // }

  return (
    <Grid 
      templateColumns='2fr 1fr'
      border='1pt solid black' 
      borderRadius='lg'
      p='10px'
      my='10px'
    >
      <FormControl>
        <Input
          id='search' 
          type='search'
          border='2pt solid black !important'
          placeholder='Enter theme/genre'
          // value={input}
          // onChange={(event) => setInput(event.target.value)}
        />
        <FormHelperText>
          Please enter single words for best results.
        </FormHelperText>
      </FormControl>
      <Flex justify='space-evenly'>
        <Button 
          mr='10px' 
          ml='10px'
          w='full'
          border='2pt solid black'
          _hover={{
            bgColor:'btnHoverColor'
          }}
          bg='btnColor'
          // onClick={handleSearch}
        >
          Generate Caption
        </Button>
      </Flex>
    </Grid>
  )
}