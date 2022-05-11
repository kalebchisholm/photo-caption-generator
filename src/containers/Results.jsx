// FILE: Results.jsx
// PURPOSE: The container for all of the results that are returned from the
//          user queries.

// ------------------------------ IMPORTS -------------------------------------
import { Grid } from "@chakra-ui/react"
import { CaptionCard } from '../components/CaptionCard'
// ----------------------------- FUNCTION -------------------------------------
export function Results(props) { 

  let count = 0

  return (
    <Grid
    m='20px'
    gap='5px'
    minH='fit-content'
    maxH='100vh'
    >
      {
        props.data.map((content) => 
          <CaptionCard key={count++} data={content}/>
        )
      }
    </Grid>
  )
}