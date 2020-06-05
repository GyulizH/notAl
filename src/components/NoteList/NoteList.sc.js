import styled from 'styled-components'
import { StarOutline } from '@styled-icons/evaicons-outline'
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
import { TrashAlt } from '@styled-icons/boxicons-regular/TrashAlt'

export const NoteListWrapper = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
export const NoteListHeader = styled.div`
  border-bottom: 1px solid #b8b3b1;
`

export const NoteListModal = styled.div`
  position: absolute;
  z-index: 2;
  right:10px;
  top:40px;
  background-color: white;
  width: 200px;
  border: 1px solid #b8b3b1;
  border-radius: 5px;
`

export const ModalListElement = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  padding: 12px 2px 12px;
  border-bottom: 0.1px solid #b8b3b1;

  &:hover {
    background-color: #f8a590;
  }
`
export const SearchInput = styled.input`
  width: 90%;
  font-size: 20px;
  padding: 10px 10px 15px 10px;
  font-family: Helvetica, sans-serif;
  outline: none;
  border: 1px solid #b8b3b1;
  margin: 10px 10px 10px 10px;
`

export const NoteListDots = styled(DotsHorizontalRounded)`
  opacity: 0;
`
export const SearchIcon = styled(SearchAlt2)`
  opacity: 1;
`
export const NoteListButton = styled.button`
  background-color: transparent;
  opacity: 0;
  float: right;
  outline: none;
`
//cursor pointer on hover not working
//how to arrange transition on selecting the list element
export const NoteListElement = styled.li`
  position: relative;
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

  &:hover ${NoteListButton} {
    opacity: 1;
  }

  &:hover ${NoteListDots} {
    opacity: 1;
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
  margin-right: 5px;
  margin-bottom: 4px;
`

export const ModalGarbage = styled(TrashAlt)`
  margin-right: 5px;
  margin-bottom: 4px;
`
