import styled from 'styled-components'

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  border-color: black;
  background-color: #90a959;
  outline: none;
`

export const EditorHeader = styled.div`
  flex-shrink: 0;
  font-size: 40px;
  padding: 2px 2px 2px 2px;
  font-family: Helvetica, sans-serif;
`
export const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  outline: none;
`
export const EditorButton = styled.button`
     position:absolute;
     top:0;
     right:0;
`
export const EditorInput = styled.input`
  outline: none;
  border: 1px solid black;
  width: 98%;
  height: 50px;
  font-size: 20px;
  margin-bottom: 4px;
  margin-left: 4px;
  margin-right: 4px;
  font-family: Helvetica, sans-serif;
  padding-left: 10px;
`
export const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  outline: none;
  border: 1px solid black;
  resize: none;
  width: 98%;
  height: 100%;
  font-family: Helvetica, sans-serif;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
`
