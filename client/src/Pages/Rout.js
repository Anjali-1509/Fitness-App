import {Route, Routes} from "react-router-dom"

import React from 'react'
import Home from "./Home"
import ExerciseDetail from "./ExerciseDetail"

const Rout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
  )
}

export default Rout
