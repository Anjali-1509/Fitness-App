import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import {Box, Stack, Typography} from "@mui/material"
import { exerciseOptions, fetchData } from './../Utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises, setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage]= useState(1)
  const exercisePerPage =9

  const indexOfLastExercise =currentPage*exercisePerPage
  const indexOfFirstExercise= indexOfLastExercise-exercisePerPage
  const currentExercises= exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  console.log(indexOfFirstExercise,indexOfLastExercise)

  const paginate =(e, value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800, behaviour:"smooth"})
  }

  useEffect(()=>{
      const fetchExercisesData= async()=>{
        let exerciseData=[]
        if(bodyPart=== "all"){
          exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
        }else{
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
        }

        setExercises(exerciseData)
      }

      fetchExercisesData()
  }, [bodyPart])

  return (
    <Box id="excercises"
    sx={{mt : {lg: "110px"}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="43px">
        Showing Results
      </Typography>

      <Stack direction="row" sx={{gap:{lg:"110px", sx:"50px"}}} flexWrap="wrap" justifyContent='center'>
          {
            currentExercises.map((exercise, index)=>
             <ExerciseCard key={index} exercise={exercise}/>
            )
          }
      </Stack>

      <Stack mt="100" alignItems="center">
         <Pagination
         color="standard"
         shape="rounded"
         defaultPage ={1}
         count={Math.ceil(exercises.length/exercisePerPage)}
         page={currentPage}
         onChange={paginate}
         size="large"
          />
      </Stack>
    </Box>
  )
}

export default Exercises
