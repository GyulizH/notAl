import React from 'react'
import styled from 'styled-components'
import Components, { BUTTON_STYLE, ButtonWrapper } from './Button.sc'

const Button = (props) => {
  Button.defaultProps = {
    appliedStyle: BUTTON_STYLE.DEFAULT,
  }
  const { children, appliedStyle, ...restOfProps } = props
  console.log(Components[appliedStyle],"buttoooon")
  const {ButtonWrapper} = Components[appliedStyle]
  return (
    <ButtonWrapper appliedStyle={appliedStyle} {...restOfProps}>
      {children}
    </ButtonWrapper>
  )
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
