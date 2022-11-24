import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import SearchInput from '/src/components/SearchInput'
import { useRouter } from 'next/router'

const menu = [
  {
    id: 1,
    name: 'Chat',
    img: '/images/icons/chat1.png',
    url: '/chat',
    width: 23,
    height: 20
  },
  {
    id: 2,
    name: 'Games',
    img: '/images/icons/games-icon.png',
    url: '/games',
    width: 20,
    height: 22
  },
  {
    id: 3,
    name: 'Market',
    img: '/images/icons/market.png',
    url: '/market',
    width: 20,
    height: 17
  },
  {
    id: 4,
    name: 'Account',
    img: '/images/icons/account.png',
    url: '/account',
    width: 18,
    height: 19
  }
]

function NavBar({ isSearch }) {
  const router = useRouter()

  const handleChangeRouter = url => {
    router.push(url)
  }

  return (
    <S.Wrapper>
      {isSearch && <SearchInput />}
      <S.Menu>
        {menu.map(item => {
          return (
            <S.Item key={item.id} onClick={() => handleChangeRouter(item.url)}>
              <div>
                <Image
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt={item.name}
                />
              </div>
              <div>{item.name}</div>
            </S.Item>
          )
        })}
      </S.Menu>
    </S.Wrapper>
  )
}

export default NavBar
