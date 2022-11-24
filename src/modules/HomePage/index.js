import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import FooterHomePage from './Footer'
import SearchComponent from '/src/components/Search'
import NavbarHome from '/src/components/Layout/NavbarHome'
//import { useRouter } from 'next/router'
import InstructionsModal from '/src/components/Modal/InstructionsModal'

function HomePage() {
  //const router = useRouter()
  const [toggleModal, setToggleModal] = useState(true)

  const handleToggle = useCallback(() => {
    setToggleModal(!toggleModal)
  }, [toggleModal])

  useEffect(() => {
    let checkSeen = JSON.parse(localStorage.getItem('xxx-show-tutorial'))
    checkSeen &&
      checkSeen[0].seen &&
      checkSeen[1].seen &&
      checkSeen[2].seen &&
      setToggleModal(false)
  }, [])

  return (
    <S.Wrapper>
      {toggleModal && <InstructionsModal toggle={handleToggle} />}
      <S.Search>
        <SearchComponent />
      </S.Search>
      <S.Logo>
        <Image
          src="/images/logo-homepage.png"
          width={394}
          height={388}
          alt="logo"
        />
      </S.Logo>
      <S.Title>Being Unstoppable Reaching Billion Code</S.Title>
      <S.Des>
        Secure Wallet. No ads to watch.
        <br /> Options to invest. Play game to win.
        <br />
        Bring more connections.
      </S.Des>
      <S.ButtonStart>
        <button>Free to Earn</button>
      </S.ButtonStart>
      <S.Footer>
        <FooterHomePage />
      </S.Footer>
      <NavbarHome />
    </S.Wrapper>
  )
}

export default HomePage
