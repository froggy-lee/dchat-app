import React from 'react'
import * as S from './styles'
import Image from 'next/image'

const WalletItem = ({ address }) => {
  return (
    <S.WalletItem>
      <strong className="wallet__index">Wallet1</strong>
      <span className="wallet__address">{address}</span>
      <div className="icon">
        <Image
          src={'/images/icons/wallet-address.png'}
          width={20}
          height={20}
          layout="fixed"
          alt=""
        />
      </div>
    </S.WalletItem>
  )
}

export default WalletItem
