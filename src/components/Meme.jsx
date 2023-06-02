import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'
import { boxShadow, font } from '../helpers/constants'

// Componenents
import MemeImageContainer from './MemeImageContainer'

// Styled components
const MemeContainer = styled.div`
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  padding: 0.25em;
  border-radius: 0.25em;
  box-shadow: ${boxShadow};
`

const MemeButton = styled.div`
  margin: 1em;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-family: ${font};
  color: #414141;
  &:hover {
    color: purple;
  };
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
      <MemeContainer>
        <MemeButton onClick={ generateMeme }>Click here to generate a random meme!</MemeButton>
        { meme !== '' &&
          <MemeImageContainer memeImg={meme}/>
        }
      </MemeContainer>
      <BackButton>
        <Link className="link" to="/" >Back to Home</Link>
      </BackButton>
    </>
  )
}

export default Meme
