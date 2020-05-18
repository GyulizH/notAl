import styled from 'styled-components'
import { StarOutline } from '@styled-icons/evaicons-outline'
import { SearchAlt2} from '@styled-icons/boxicons-regular/SearchAlt2'
import { DotsHorizontalRounded} from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
export const NoteListWrapper = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`
export const NoteListHeader = styled.div`
  border-bottom: 1px solid #b8b3b1;
`

export const SearchInput = styled.input`
  width:90%;
  font-size: 25px;
  padding: 10px 10px 15px 10px;
  font-family: Helvetica, sans-serif;
  outline:none;
  border: 1px solid #b8b3b1;
  margin: 10px 10px 10px 10px;
`

export const NoteListDots = styled(DotsHorizontalRounded)`
  opacity:0;
`
export const SearchIcon =  styled(SearchAlt2)`
 opacity:0;
`
export const NoteListButton = styled.button`
 background-color:transparent;
 opacity:0;
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
  
  &:hover ${NoteListButton}{
    opacity:1;
    }
    
     &:hover ${NoteListDots}{
    opacity:1;
    }
`

NoteListElement.defaultProps = {
  theme: {
    unselected: '#e5e5e5',
    selected: '#F8A590',
  },
}

export const NoteListStar = styled(StarOutline)`
  size: 1;
`
