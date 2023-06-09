import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from '../Utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
      setBodyParts(["all", ...bodyPartsData])
    }

    fetchExerciseData()
  }, [])

  const handleSubmit = async () => {
    if (search) {
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" textAlign="center">
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700", border: "none", borderRadius: "4px"
            }, width: {
              lg: "800px", xs: "350px"
            },
            backgroundColor: "#fff", borderRadius: "40px"
          }}
          height="76px"
          value={search}
          type="text"
          placeholder="Search Exercises"
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#FF2625", color: "#fff", textTransform: "none", width: { lg: "125px", xs: "80px" }, fontSize: { lg: "20px", xs: "14px" }, height: "56px", position: "absolute", right: 0
          }}
          onClick={handleSubmit}
        >
          SEARCH
        </Button>
      </Box>
      <Box sx={{position:"relative", width:"100%", p:"20px"}}>
         <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises
