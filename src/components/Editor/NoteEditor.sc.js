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
// the parent element mut have position:relative
// for the button to align relatively

export const EditorHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 40px;
  padding: 2px 2px 2px 2px;
`
export const EditorButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
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
