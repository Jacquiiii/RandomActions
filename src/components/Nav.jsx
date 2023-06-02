// External imports
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

// Styles
import { font } from '../constants'

// Context
import { ThemeContext } from '../providers/ThemeProvider'

// Styled components
const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  width: 100%;
  height: 30%;
  button {
    border: none;
    margin: 1em;
    cursor: pointer;
    background: none;
    font-family: ${font};
    color: whitesmoke;
    font-weight: bold;
    font-size: larger;
    &:hover {
      text-decoration: underline;
    };
  }
`

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <NavBar>
      <button><Link className="link" to="/" >Home</Link></button>
      <button onClick={handleThemeChange}>Theme</button>
      <button><Link className="link" to="/Counter" >Counter</Link></button>
      <button><Link className="link" to="/Meme" >Meme Generator</Link></button>
    </NavBar>
  )
}

export default Nav