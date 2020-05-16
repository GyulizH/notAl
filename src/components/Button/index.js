import React from 'react'
import styled from 'styled-components'
import Components, { BUTTON_STYLE, ButtonWrapper } from './Button.sc'

const Button = (props) => {
  Button.defaultProps = {
    appliedStyle: BUTTON_STYLE.DEFAULT,
  }
  const { children, appliedStyle, ...restOfProps } = props
  // console.log(Components[appliedStyle],"buttoooon")
  //const {ButtonWrapper} = Components[appliedStyle]
  return (
    <ButtonWrapper appliedStyle={appliedStyle} {...restOfProps}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
