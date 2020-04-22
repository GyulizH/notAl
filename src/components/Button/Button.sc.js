import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: inline-block;
  padding: 10px;
  margin: 0px 5px;
  border: 1px solid ${(props) => (props.danger ? 'red' : '#ccc')};
  background: ${(props) => (props.danger ? 'red' : '#fff')};
  color: ${(props) => (props.danger ? '#fff' : '#000')};
  border-radius: 5px;
  outline: none;
`
