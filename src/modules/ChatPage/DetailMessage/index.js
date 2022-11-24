import React, { useCallback, useState } from 'react'
import HeaderDetail from './HeaderDetail'
import BoxMessage from '/src/components/BoxMessage'
import TextArea from '/src/components/TextArea'
import InfoModule from '/src/modules/ChatPage/InfoModule'
import * as S from './styles'
import { useRouter } from 'next/router'
import ChatPage from '..'
import { useSelector } from 'react-redux'
import { selectshowMenu } from '/src/store/slice/showMenu'

const listMessage = [
  {
    id: 1,
    avatar: '/images/icons/btc.png',
    user: 'Bitcoin',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'of td tym Ipsumdun aninte'
      },
      {
        type: 'me',
        text: 'Hello.'
      }
    ]
  },
  {
    id: 2,
    avatar: '/images/icons/eth.png',
    user: 'Ethereum',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    id: 3,
    avatar: '/images/icons/bnb-icon.png',
    user: 'Binace',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    id: 4,
    avatar: '/images/icons/tiger.png',
    user: 'Tiger',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    id: 5,
    avatar: '',
    user: 'User',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    id: 6,
    avatar: '',
    user: 'User1',
    time: '10:10',
    textMessage: [
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'me',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        type: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ]
  }
]

function DetailMessage() {
  const router = useRouter()
  const showMenu = useSelector(selectshowMenu)
  const [toggleInfor, setToggleInfor] = useState(false)

  const handleBackChat = useCallback(() => {
    router.push('/chat')
  }, [router])

  const handleBackDetail = useCallback(() => {
    setToggleInfor(false)
  }, [])

  const handleToggle = useCallback(() => {
    setToggleInfor(!toggleInfor)
  }, [toggleInfor])

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <S.Wrapper>
      <S.ListMessege show={showMenu}>
        <ChatPage />
      </S.ListMessege>
      <S.ChatScreen show={showMenu}>
        <S.Header show={showMenu}>
          <HeaderDetail
            message={listMessage[router.query.id - 1]}
            handleBack={handleBackChat}
            handleToggle={handleToggle}
          />
        </S.Header>

        <S.Content>
          <BoxMessage message={listMessage[router.query.id - 1]} />
        </S.Content>
        <S.Infor toggle={toggleInfor} show={showMenu}>
          <div>
            <HeaderDetail
              message={listMessage[router.query.id - 1]}
              handleBack={handleBackDetail}
            />
          </div>
          <InfoModule />
        </S.Infor>
        <S.TextInput show={showMenu}>
          <TextArea />
        </S.TextInput>
      </S.ChatScreen>
    </S.Wrapper>
  )
}

export default DetailMessage
