import React from 'react'
import styled from 'styled-components'
import { ButtonWrapper } from './Button.sc'

const Button = (props) => {
  const { children, ...restOfProps } = props
  return <ButtonWrapper {...restOfProps}> {children} </ButtonWrapper>
}

// export default styled(Button)`
//   display: inline-block;
//   padding: 10px;
//   margin: 0px 5px;
//   border: 1px solid ${props => props.danger ? "red" : "#ccc"};
//   background: ${props => props.danger ? "red" : "#fff"};
//   color: ${props => props.danger ? "#fff" : "#000"};
//   border-radius: 5px;
//   outline: none;
// `

export default Button
