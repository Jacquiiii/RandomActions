// External imports
import React from "react"
import styled from 'styled-components'

// Styles
import { font, boxShadow } from '../constants/constants'

// Styled components
const HookTypeContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: 15%;
  font: ${font};
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 6.4% 9.8%, rgb(88, 242, 174) 0%, rgb(0, 130, 240) 97.9%);
    padding: 0.25em;
    font-size: 12px;
    color: black;
    width: 110px;
    height: 90px;
    border-radius: 50%; 
    margin: 0.25em 1em;
    text-align: center;
    box-shadow: ${boxShadow};
    font-weight: bold;
    position: absolute;
    top: -25px;
  }
`

const HookType = (props) => {
  return (
    <HookTypeContainer>
      <div>
        <span>{props.hook}</span>
      </div>
    </HookTypeContainer>
  )
}

export default HookType