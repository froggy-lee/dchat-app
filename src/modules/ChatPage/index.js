import React, { useCallback, useState } from 'react'
import SearchComponent from '/src/components/Search'
import Header from './Header'
import NavbarHome from '/src/components/Layout/NavbarHome'
import * as S from './styles'
import Message from './Message'
import ModalPage from '/src/modules/ModalPage'
import { useSelector } from 'react-redux'
import { selectshowMenu } from '/src/store/slice/showMenu'

const listMessageFake = [
  {
    id: 1,
    avatar: '/images/icons/btc.png',
    active: false,
    user: 'Bitcoin',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  },
  {
    id: 2,
    avatar: '/images/icons/eth.png',
    active: false,
    user: 'Ethereum',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  },
  {
    id: 3,
    avatar: '/images/icons/bnb-icon.png',
    active: false,
    user: 'Binace',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  },
  {
    id: 4,
    avatar: '/images/icons/tiger.png',
    active: false,
    user: 'Tiger',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  },
  {
    id: 5,
    avatar: '',
    active: false,
    user: 'User',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  },
  {
    id: 6,
    avatar: '',
    active: false,
    user: 'User1',
    time: '10:10',
    textMessage:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna'
  }
]

function ChatPage() {
  const showMenu = useSelector(selectshowMenu)
  const [listMessage, setListMessage] = useState(listMessageFake)

  const handleActive = useCallback(id => {
    const newList = [...listMessageFake]
    newList.splice(id - 1, 1, {
      ...listMessageFake[id - 1],
      active: true
    })
    setListMessage([...newList])
  }, [])

  return (
    <>
      <S.Wrapper show={showMenu}>
        <S.Edit>
          <Header />
        </S.Edit>
        <S.Title>Chat</S.Title>
        <div>
          <SearchComponent />
        </div>
        <S.ListMessage>
          {listMessage.map(message => (
            <div key={message.id} onClick={() => handleActive(message.id)}>
              <Message message={message} />
            </div>
          ))}
        </S.ListMessage>
        <NavbarHome />
        <ModalPage />
      </S.Wrapper>
    </>
  )
}

export default ChatPage
