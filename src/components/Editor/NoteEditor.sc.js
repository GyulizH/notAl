import styled from 'styled-components'

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-color: black;
  background-color: #90a959;
`

export const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  outline: none;
`

export const EditorInput = styled.input`
  outline: none;
  border: 1px solid black;
  width: 20%;
  height: 30px;
`
export const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  outline: none;
  border: 1px solid #888;
  resize: none;
  width: 100%;
  height: 100%;
`
