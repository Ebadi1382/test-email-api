import React from 'react'
import "./App.css"
import MainEmail from './containers/MainEmail/MainEmail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <MainEmail/>
    </BrowserRouter>
  )
}

export default App