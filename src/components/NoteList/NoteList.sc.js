import styled from 'styled-components'

export const NoteListHeader = styled.div`
  flex-shrink: 0;
  font-size: 30px;
  padding: 2px 2px 2px 2px;
  font-family: Helvetica, sans-serif;
`

export const NoteListWrapper = styled.div`
  height: 100%;
  width: 28%;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`

export const NoteListElement = styled.li`
  list-style-type: none;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.selected : theme.unselected};
  font-family: Helvetica, sans-serif;
  padding: 12px 2px 12px;
  margin-bottom: 10px;
  border-bottom: 1px solid #b8b3b1;
`
NoteListElement.defaultProps = {
  theme: {
    unselected: '#e5e5e5',
    selected: '#F8A590',
  },
}
