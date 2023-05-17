import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const CoinItem = ({ data }) => {
  return (
    <Link href={`/coins/bitcoin`} passHref>
      <S.CoinWrapper>
        <S.CoinImage>
          <Image
            src={data.image || '/images/project/project-1.png'}
            width={120}
            height={120}
            alt={`coin-image`}
          />
        </S.CoinImage>

        <S.CoinContent>
          <h1 className="coin-item__title">{data.title}</h1>
          <p className="coin-item__description">{data.description}</p>
        </S.CoinContent>
      </S.CoinWrapper>
    </Link>
  )
}

export default CoinItem
