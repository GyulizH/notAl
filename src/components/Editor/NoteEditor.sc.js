import styled from 'styled-components'

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-color: black;
  background-color: #5e5c5c;
`

export const EditorHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 40px;
  padding: 2px 2px 2px 2px;
  margin: 10px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: none;
  outline: none;
  b1px solid #d0d0d0;
  height: 40px;
  font-family: Helvetica, sans-serif;
  font-size:18px;
`
export const TextArea = styled.textarea`
  outline: none;
  border: 1px solid #888;
  resize: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
`
