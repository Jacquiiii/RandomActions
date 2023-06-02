import React from "react"
import styled from 'styled-components'
import { boxShadow, font } from '../helpers/constants'

// Styled components
const MemeContainer = styled.div`
  padding: 1em;
  margin: 1em;
  font-size: 1em;
  border-radius: 0.25em;
  border: none;
  cursor: pointer;
  font-family: ${font};
  img {
    height: 300px;
    width: 300px;
    box-shadow: ${boxShadow};
    border-radius: 0.25em;
  }
`

const MemeImageContainer = (props) => {
  return (
    <>
      <MemeContainer>
        <img alt="meme" src={ props.memeImg }/>
      </MemeContainer>
    </>
  )
}

export default MemeImageContainer
