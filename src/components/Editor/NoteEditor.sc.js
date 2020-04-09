import styled from 'styled-components'

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-color: black;
  background-color: #90a959;
  outline: none;
`
// position:relative , so that the button is aligned
// according to editor header
export const EditorHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
// the parent element mut have position:relative
// for the button to align relatively
export const EditorButton = styled.button`
     position:absolute;
     top:0;
     right:0;
     border: 1px solid #ddd;
     padding: 10px;
     font-size: 14px;
     border-radius: 5px;
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
