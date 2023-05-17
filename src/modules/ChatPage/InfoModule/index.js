import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import { UploadIcon, AddIcon } from '/public/svgs'

const fakeData = {
  name: 'Folder name',
  listFolders: [
    {
      id: 1,
      name: 'Topic 1 title Lorem ipsum dolor sit amet',
      time: '10:10',
      active: true
    },
    {
      id: 2,
      name: 'Topic 1 title Lorem ipsum dolor sit amet',
      time: '10:10',
      active: false
    },
    {
      id: 3,
      name: 'Topic 1 title Lorem ipsum dolor sit amet',
      time: '10:10',
      active: false
    }
  ]
}

const Title = ({ title }) => {
  return <S.Title>{title}</S.Title>
}

const InfoModule = () => {
  return (
    <S.InfoChatSection>
      <S.TopBackground>
        <S.InfoAvatar>
          <Image
            src="/images/chat-info-avatar.png"
            width={80}
            height={80}
            alt="info-chat-avatar"
          />
        </S.InfoAvatar>
      </S.TopBackground>

      <S.InfoChatContainer>
        <S.InfoDescription>
          Bio Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
          elusmod tempor
        </S.InfoDescription>

        <S.InfoEditSection>
          <S.Upload>
            <UploadIcon />
          </S.Upload>
          <S.Add>
            <AddIcon />
          </S.Add>
          <S.Edit>Edit</S.Edit>
        </S.InfoEditSection>

        <S.InfoFolderWrapper>
          <S.InfoFolderItemContainer>
            <Title title={fakeData.name} />
            {fakeData.listFolders.map(item => (
              <S.InfoFolderItem key={item.id} active={item.active}>
                <S.InfoFolderName>{item.name}</S.InfoFolderName>

                <S.InfoFolderDate>{item.time}</S.InfoFolderDate>
              </S.InfoFolderItem>
            ))}
          </S.InfoFolderItemContainer>

          <S.InfoFolderItemContainer>
            <Title title={fakeData.name} />
            {fakeData.listFolders.map(item => (
              <S.InfoFolderItem key={item.id} active={item.active}>
                <S.InfoFolderName>{item.name}</S.InfoFolderName>

                <S.InfoFolderDate>{item.time}</S.InfoFolderDate>
              </S.InfoFolderItem>
            ))}
          </S.InfoFolderItemContainer>

          <S.InfoFolderItemContainer>
            <Title title={fakeData.name} />
            {fakeData.listFolders.map(item => (
              <S.InfoFolderItem key={item.id} active={item.active}>
                <S.InfoFolderName>{item.name}</S.InfoFolderName>

                <S.InfoFolderDate>{item.time}</S.InfoFolderDate>
              </S.InfoFolderItem>
            ))}
          </S.InfoFolderItemContainer>

          <S.InfoFolderItemContainer>
            <Title title={fakeData.name} />
            {fakeData.listFolders.map(item => (
              <S.InfoFolderItem key={item.id} active={item.active}>
                <S.InfoFolderName>{item.name}</S.InfoFolderName>

                <S.InfoFolderDate>{item.time}</S.InfoFolderDate>
              </S.InfoFolderItem>
            ))}
          </S.InfoFolderItemContainer>
        </S.InfoFolderWrapper>
      </S.InfoChatContainer>
    </S.InfoChatSection>
  )
}

export default InfoModule
