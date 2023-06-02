import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { boxShadow, font } from '../helpers/constants'

// Styled components
const CounterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  border-radius: 0.25em;
  box-shadow: ${boxShadow};
  width: 50vw;
  padding: 0 1em;
  font-family: ${font};
  p {
    color: whitesmoke;
  }
  button {
    border: none;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    color: white;
  };
  button:hover {
    color: #00D9D9;
    text-shadow: 1px 1px 1px #000;
  };
  p {
    font-size: 50px;
    font-weight: bold;
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

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count => count + 1)
  }

  const handleDecrease = () => {
    setCount(count => count - 1)
  }

  return (
    <>
      <CounterButtonContainer data-testid="counter-component">
        <button onClick={handleDecrease}>–</button>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
      </CounterButtonContainer>
      <BackButton>
        <Link className="link" to="/" >Back to Home</Link>
      </BackButton>
    </>
  )
}

export default Counter
