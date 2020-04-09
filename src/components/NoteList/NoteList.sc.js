import styled from 'styled-components'

const theme = {
  fontType: " 'Helvetica', sans-serif",
}
export const NoteListHeader = styled.div`
  flex-shrink: 0;
  font-size: 30px;
  padding: 2px 2px 2px 2px;
  font-family: Helvetica, sans-serif;
`

export const NoteListWrapper = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`

export const NoteListElement = styled.li`
  list-style-type: none;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.selected : theme.unselected};
  font-family: Helvetica, sans-serif;
`
NoteListElement.defaultProps = {
  theme: {
    unselected: '#e5e5e5',
    selected: '#F8A590',
  },
}
