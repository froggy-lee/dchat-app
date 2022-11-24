import React from 'react'
import Image from 'next/image'
import * as S from './styles'

function SearchComponent() {
  return (
    <S.Wrapper>
      <S.Search>
        <Image
          src="/images/icons/search.png"
          width={20}
          height={20}
          alt="search"
        />
      </S.Search>
      <S.Input type="text" placeholder="Search" />
    </S.Wrapper>
  )
}

export default SearchComponent
