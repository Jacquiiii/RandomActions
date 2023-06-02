import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { boxShadow, font } from '../helpers/constants'

// Styled components
const NavigationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  font-family: ${font};
  border-radius: 0.25em;
  padding: 0 1em;
  font-family: ${font};
  button {
    padding: 1em;
    margin: 1em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    box-shadow: ${boxShadow};
    font-family: ${font};
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
    &:hover {
      background: linear-gradient(109.6deg, rgb(17, 151, 147) 11.2%, rgb(154, 214, 212) 55.4%, rgb(255, 233, 171) 100.2%);
    };
  }
`

const Home = () => {
  return (
    <NavigationButtonsContainer>
      <button>
        <Link className="link" to="/Counter" >Click here to see a counter</Link>
      </button>
      <button>
        <Link className="link" to="/Meme" >Click here to generate a meme</Link>
      </button>
      {/* <button>
        <Link className="link" to="/Mood" >Click here to select your mood</Link>
      </button> */}
    </NavigationButtonsContainer>
  )
}

export default Home