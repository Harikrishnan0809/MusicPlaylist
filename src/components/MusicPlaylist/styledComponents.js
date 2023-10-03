import styled from 'styled-components'

export const MusicPlaylistContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  flex-direction: column;
`
export const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const NameHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  margin-top: 0px;
  color: #ffffff;
`

export const NoSongsHeading = styled.p`
  font-size: 40px;
  margin-top: 50px;
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
`

export const RoleName = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 0px;
`

export const HeadingSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BottomContainer = styled.div`
  padding: 20px;
`

export const SongHeading = styled(NameHeading)`
  font-size: 25px;
  font-weight: 500;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #cbd5e1;
`
export const SearchInput = styled.input`
  width: 250px;
  outline: none;
  border: none;
  background-color: transparent;
  height: 20px;
  color: #ffffff;
`

export const Container = styled.div``

export const UlPlaylistContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  height: 300px;
  overflow: auto;
`
