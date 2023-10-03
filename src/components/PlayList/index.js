import {AiOutlineDelete} from 'react-icons/ai'
import {
  TitleAndImageContainer,
  ImageTub,
  ListItem,
  NameAndGenreContainer,
  Name,
  DurationAndDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const Playlist = props => {
  const {details, onDeleteList} = props
  const {imageUrl, name, genre, duration, id} = details

  const onDelete = () => {
    onDeleteList(id)
  }
  return (
    <ListItem>
      <TitleAndImageContainer>
        <ImageTub src={imageUrl} alt="track" />
        <NameAndGenreContainer>
          <Name colors="#ffffff">{name}</Name>
          <Name colors="#3b82f6">{genre}</Name>
        </NameAndGenreContainer>
      </TitleAndImageContainer>

      <DurationAndDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton data-testid="delete" onClick={onDelete} type="button">
          <AiOutlineDelete color="#ffffff" size={20} />
        </DeleteButton>
      </DurationAndDeleteContainer>
    </ListItem>
  )
}

export default Playlist
