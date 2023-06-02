// Currently not in use

// External imports
import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

// Styles
import { boxShadow, font } from '../constants'

// Styled components
const TopMoodContainer = styled.p`
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  border-radius: 1em;
`

const MoodTitle = styled.p`
  color: whitesmoke;
  font-weight: bold;
  font-family: ${font};
  font-size: 1.25em;
`

const MoodResult = styled.p`
  color: whitesmoke;
  font-weight: bold;
  font-family: ${font};
`

const MoodButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: ${font};
  button {
    background-color: transparent;
    padding: 0.5em 1em;
    margin: 1em;
    font-size: 1em;
    border-radius: 1em;
    border: none;
    cursor: pointer;
    font-family: ${font};
    color: purple;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      background: linear-gradient(109.6deg, rgb(17, 151, 147) 11.2%, rgb(154, 214, 212) 55.4%, rgb(255, 233, 171) 100.2%);
    };
  }
`

const BackButton = styled.button`
  padding: 0.5em 1em;
  margin: 2em;
  border-radius: 1.5em;
  border: none;
  font-size: 1em;
  cursor: pointer;
  box-shadow: ${boxShadow};
  font-family: ${font};
  background: linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%);
  &:hover {
    background: radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%);
  }
  .link {
    color: #414141;
  }
`

const Mood = () => {
  const [mood, setMood] = useState("")

  const handleMood = (selectedMood) => {
    setMood(selectedMood)
  }

  return (
    <>
      <TopMoodContainer>
        <MoodTitle>Select your current mood:</MoodTitle>
        <MoodButtonsContainer>
          <button onClick={() => handleMood("happy 🙂")}>Happy</button>
          <button onClick={() => handleMood("sad 🙁")}>Sad</button>
          <button onClick={() => handleMood("excited 🥳")}>Excited</button>
          <button onClick={() => handleMood("mad 😡")}>Mad</button>
          <button onClick={() => handleMood("tired 😴")}>Tired</button>
        </MoodButtonsContainer>
        {mood !== "" &&
          <MoodResult>Right now I am {mood}</MoodResult>
        }
      </TopMoodContainer>
      <BackButton>
        <Link className="link" to="/" >Back to Home</Link>
      </BackButton>
    </>
  )
}

export default Mood
