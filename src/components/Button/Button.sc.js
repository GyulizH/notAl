import styled from 'styled-components'

export const BUTTON_STYLE = {
  DANGER: 'danger',
  DEFAULT: 'default',
}
export const ButtonWrapper = styled.button`
  display: inline-block;
  padding: 10px;
  margin: 0px 5px;
  border: 1px solid ${(props) => (props.danger ? 'red' : '#ccc')};
  background: ${(props) => (props.danger ? 'red' : '#fff')};
  color: ${(props) => (props.danger ? '#fff' : '#000')};
  border-radius: 5px;
  outline: none;
  width: 5rem;
  cursor:pointer;
  &:hover {
    background-color: #757474;
  }
`

export const ButtonDanger = styled(ButtonWrapper)`
  &&&{
  background:green
`

const Components = {
  [BUTTON_STYLE.DANGER]: { ButtonWrapper: ButtonDanger },
  [BUTTON_STYLE.DEFAULT]: { ButtonWrapper: ButtonWrapper }
}

export default Components
