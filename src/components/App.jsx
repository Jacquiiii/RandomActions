// External imports
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Context
import { ThemeContext } from '../providers/ThemeProvider'

// Styles
import './styles.css'

// Components
import Home from './Home'
import Counter from './Counter'
import Meme from './Meme'
import Mood from './Mood'

// Styled Components
import styled from 'styled-components'

const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2em;
  cursor: pointer;
  align-self: flex-start;
  margin-left: 2em;
`

function App() {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App-${theme}`}>
      <ThemeButton onClick={handleThemeChange}>🌗</ThemeButton>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/Meme" element={<Meme />} />
          <Route exact path="/Mood" element={<Mood />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
