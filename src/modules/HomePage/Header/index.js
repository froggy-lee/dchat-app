import React from 'react'
import Image from 'next/image'
import * as S from './styles'

function HeaderHome() {
  return (
    <S.Wrapper>
      <div>
        <Image
          src="/images/icons/white-hambuger.png"
          width={24}
          height={14}
          alt="hambuger"
        />
      </div>
      <div>
        <Image
          src="/images/icons/multi-language.png"
          width={24}
          height={24}
          alt="multi-language"
        />
      </div>
    </S.Wrapper>
  )
}

export default HeaderHome
