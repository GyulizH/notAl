import styled from 'styled-components'
import { StarOutline } from '@styled-icons/evaicons-outline'

export const NoteListWrapper = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`
export const NoteListHeader = styled.div`
  font-size: 30px;
  padding: 10px 10px 15px 10px;
  font-family: Helvetica, sans-serif;
  border-bottom: 1px solid #b8b3b1;
`

//cursor pointer on hover not working
//how to arrange transition on selecting the list element
export const NoteListElement = styled.li`
  list-style-type: none;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.selected : theme.unselected};
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  padding: 12px 2px 12px;
  border-bottom: 1px solid #b8b3b1;
  cursor: pointer;
  transition: all 0.3;

  &:hover {
    background-color: #d1cdcd;
    cursor: pointer;
  }
`

NoteListElement.defaultProps = {
  theme: {
    unselected: '#e5e5e5',
    selected: '#F8A590',
  },
}

export const NoteListStar = styled(StarOutline)`
  size: 10;
`
