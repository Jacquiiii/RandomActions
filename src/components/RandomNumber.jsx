// External imports
import React, { useState, useMemo } from "react"
import styled from 'styled-components'

// Components
import Nav from "./Nav"

// Styles
import { boxShadow, font } from '../constants/constants'

// Styled components
const RandomNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GenerateContainer = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  button {
    font-size: 30px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-family: ${font};
    color: whitesmoke;
    border-radius: 0.25em;
    padding: 1em 2em;
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
    box-shadow: ${boxShadow};
  }
`

const ResultsContainer = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dcdcdc;
  border-radius: 0.25em;
  color: black;
  margin-top: 2em;
  button {
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-family: ${font};
    color: whitesmoke;
    border-radius: 0.25em;
    padding: 1em 2em;
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
    box-shadow: ${boxShadow};
    font-size: 16px;
    margin: 2em;
  }
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  const numberGenerator = () => {
    const number = Math.floor(Math.random() * 100) + 1
    setRandomNumber(number)
  }

  const message = useMemo(() => {
    return randomNumber % 2 === 0 ? "Even number generated!" : "Odd number generated!"
  }, [randomNumber])

  return (
    <RandomNumberContainer>
      <Nav />
      <GenerateContainer>
        <button onClick={numberGenerator}>Click here!</button>
      </GenerateContainer>
      {randomNumber > 0 &&
        <>
          <ResultsContainer>
            <Result>
              <h2>{randomNumber}</h2>
              <span>{message}</span>
            </Result>
            <button onClick={() => setRandomNumber(0)}>Clear</button>
          </ResultsContainer>
        </>
      }
    </RandomNumberContainer>
  )
}

export default RandomNumber

