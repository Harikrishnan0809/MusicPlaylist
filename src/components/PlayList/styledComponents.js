import styled from 'styled-components'

export const ListItem = styled.li`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`

export const TitleAndImageContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ImageTub = styled.img`
  width: 120px;
  margin-right: 15px;
`

export const Name = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.colors};
`

export const NameAndGenreContainer = styled.div``

export const DurationAndDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
`

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 15px;
`
