// External imports
import React, { useState } from "react"
import axios from 'axios'
import styled from 'styled-components'

// Componenents
import MemeImageContainer from './MemeImageContainer'
import Nav from "./Nav"

// Styles
import { boxShadow, font } from '../constants'

// Styled components
const MemeContainer = styled.div`
  padding: 0.25em;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MemeButton = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-family: ${font};
  color: whitesmoke;
  width: 20%;
  padding: 0.5em 0.25em;
  border-radius: 0.25em;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  box-shadow: ${boxShadow};
`

const Meme = () => {
  const [meme, setMeme] = useState("")

  const generateMeme = () => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => {
        const memeList = response.data.data.memes
        const randomNumber = Math.floor(Math.random() * 101)
        setMeme(memeList[randomNumber].url)
      })
      .catch(error => console.error)
  }

  return (
    <>
      <Nav />
      <MemeContainer>
        <MemeButton onClick={ generateMeme }>Click here!</MemeButton>
        { meme !== '' && <MemeImageContainer memeImg={meme}/> }
      </MemeContainer>
    </>
  )
}

export default Meme
