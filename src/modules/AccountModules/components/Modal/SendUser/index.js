import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { SendWallet } from '/src/modules/AccountModules/components'

const SendUser = ({ active, onClose }) => {
  const [openModalSendWallet, setOpenModalSendWallet] = useState(false)

  const onOpenModalSendWallet = () => {
    setOpenModalSendWallet(true)
  }

  const onCloseModalSendWallet = () => {
    setOpenModalSendWallet(false)
  }

  return (
    <S.SendUser active={active}>
      <S.Header>
        <S.Cancel onClick={onClose}>Cancel</S.Cancel>
        <S.Title>Send to</S.Title>
        <S.Next>Next</S.Next>
      </S.Header>

      <S.Search>
        <input type="text" placeholder="Search, public address (Ox), or ENS" />
      </S.Search>

      <S.ListAccount>
        <S.Account onClick={onOpenModalSendWallet}>
          <S.AccountInfo>
            <strong className="account">Account 1</strong>
            <span className="wallet">0x8F2985739d3...63cBA2e3</span>
          </S.AccountInfo>
          <div className="icon">
            <Image
              src="/images/icons/mini-arrow.png"
              width={6}
              height={10}
              alt=""
            />
          </div>
        </S.Account>

        <S.Account onClick={onOpenModalSendWallet}>
          <S.AccountInfo>
            <strong className="account">Account 1</strong>
            <span className="wallet">0x8F2985739d3...63cBA2e3</span>
          </S.AccountInfo>
          <div className="icon">
            <Image
              src="/images/icons/mini-arrow.png"
              width={6}
              height={10}
              alt=""
            />
          </div>
        </S.Account>

        <S.Account onClick={onOpenModalSendWallet}>
          <S.AccountInfo>
            <strong className="account">Account 1</strong>
            <span className="wallet">0x8F2985739d3...63cBA2e3</span>
          </S.AccountInfo>
          <div className="icon">
            <Image
              src="/images/icons/mini-arrow.png"
              width={6}
              height={10}
              alt=""
            />
          </div>
        </S.Account>
      </S.ListAccount>

      {openModalSendWallet && (
        <SendWallet
          onClose={onCloseModalSendWallet}
          active={openModalSendWallet}
        />
      )}
    </S.SendUser>
  )
}

export default SendUser
