import React from 'react'
import InforShortcut from './InforShortcut'
import MainInfor from './MainInfor'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

function CoinScreen() {
  const router = useRouter()

  const handleBackHome = () => {
    router.push('/coins')
  }

  return (
    <>
      <S.Back onClick={handleBackHome}>
        <Image src="/images/icons/back.png" width={32} height={32} alt="back" />
      </S.Back>
      <S.Wrapper>
        <MainInfor />
        <InforShortcut />
      </S.Wrapper>
    </>
  )
}

export default CoinScreen
