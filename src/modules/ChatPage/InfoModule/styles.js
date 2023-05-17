import styled from 'styled-components'

export const InfoChatSection = styled.section`
  position: relative;
  padding: 0 1rem;
  max-width: 768px;
  margin: 0 auto;
  overflow-x: hidden;
`

export const TopBackground = styled.div`
  background: #d9d9d9;

  width: 100vw;
  height: 135px;
  position: relative;
  left: calc(-50vw + 50%);
`

export const InfoAvatar = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`

export const InfoChatContainer = styled.section`
  position: relative;
  padding: 5rem 0;
`

export const InfoDescription = styled.h2`
  max-width: 285px;
  width: 100%;
  margin: 0 auto 1rem auto;

  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  letter-spacing: 0.02em;
  text-align: center;
  color: #333333;
`

export const InfoEditSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditButton = styled.button`
  background: none;
  outline: none;
  border: none;
`

export const Upload = styled(EditButton)``

export const Add = styled(EditButton)``

export const Edit = styled(EditButton)`
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.04em;

  color: #3a6fb7;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.02em;

  color: #333333;
`

export const InfoFolderWrapper = styled.div``

export const InfoFolderItemContainer = styled.div`
  position: relative;
  padding: 1rem 0;

  &:nth-child(1) {
    padding-top: 2rem;
  }

  &:last-child {
    padding-bottom: 2rem;
  }
`

export const InfoFolderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => (props.active ? '#3A6FB7' : '#969ba6')};
  }
`

export const InfoFolderText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;

  margin: 0;
  color: #333333;
`

export const InfoFolderNameContainer = styled.div`
  position: relative;
  max-width: 100%;
`

export const InfoFolderName = styled(InfoFolderText)`
  position: relative;
  padding-left: 1rem;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 270px; */
`

export const InfoFolderDate = styled(InfoFolderText)``
