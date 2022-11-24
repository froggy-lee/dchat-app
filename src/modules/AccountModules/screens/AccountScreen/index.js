import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import ConnectButton from '/src/components/ConnectButton'
import {
  WalletItem,
  UserInfoInput
} from '/src/modules/AccountModules/components'
import { listSocial, listSettings } from '/src/modules/AccountModules/data'
import { AccountHeader } from '/src/modules/AccountModules/components'
import { useRouter } from 'next/router'

const Title = ({ title }) => {
  return <S.Title>{title}</S.Title>
}

const AccountScreen = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const router = useRouter()

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangePhone = e => {
    setPhone(e.target.value)
  }

  const onChangeBack = () => router.back()

  const onChangeContact = () => router.push('/contact')

  return (
    <>
      <AccountHeader
        back
        leftFunction={onChangeBack}
        title="Account"
        rightButton
        rightLabel="Contacts"
        rightFunction={onChangeContact}
      />
      <S.Screen>
        <S.UserInfo>
          <div className="avatar">
            <Image
              src={'/images/icons/default-avatar.png'}
              width={70}
              height={70}
              alt=""
            />
          </div>
          <h1 className="user-name">Username</h1>
        </S.UserInfo>

        <S.CryptoWalletSection>
          <Title title="CRYPTO WALLET" />
          <WalletItem address="0x8F2985739d3...63cBA2e3" />
          <ConnectButton label="Add Another Wallet" connectSocial />
        </S.CryptoWalletSection>

        <S.PersonalInfoSection>
          <Title title="PERSONAL INFORMATION" />

          <S.Content>
            <S.Phone>
              <strong className="personal-info__title">Phone</strong>

              <div className="personal-info__content">
                <UserInfoInput
                  className="personal__input"
                  placeholder="+1 234 56789"
                  name="phone"
                  onChange={handleChangePhone}
                  value={phone}
                  type="text"
                />

                <div className="icon">
                  <Image
                    src={'/images/icons/mini-arrow.png'}
                    width={6}
                    height={10}
                    alt=""
                  />
                </div>
              </div>
            </S.Phone>

            <S.Email>
              <strong className="personal-info__title">Email</strong>

              <div className="personal-info__content">
                <UserInfoInput
                  className="personal__input"
                  placeholder="Info@dmessage.org"
                  name="email"
                  onChange={handleChangeName}
                  value={name}
                  type="text"
                />

                <div className="icon">
                  <Image
                    src={'/images/icons/mini-arrow.png'}
                    width={6}
                    height={10}
                    alt=""
                  />
                </div>
              </div>
            </S.Email>

            <S.Social>
              <strong className="personal-info__title">Social</strong>

              <div className="personal-info__content">
                <div className="social__wrapper">
                  {listSocial.map(social => (
                    <div className="social__icon" key={social.id}>
                      <Image
                        src={social.icon}
                        width={social.width}
                        height={social.height}
                        alt=""
                      />
                    </div>
                  ))}
                </div>

                <div className="icon">
                  <Image
                    src={'/images/icons/mini-arrow.png'}
                    width={6}
                    height={10}
                    alt=""
                  />
                </div>
              </div>
            </S.Social>
          </S.Content>
        </S.PersonalInfoSection>

        <S.SettingsSection>
          <Title title="SETTINGS" />

          <S.Content>
            {listSettings.map(setting => (
              <S.SettingItem key={setting.title}>
                <div className="setting__content">
                  <div className="icon">
                    <Image src={setting.icon} width={25} height={25} alt="" />
                  </div>{' '}
                  <strong className="setting__title">{setting.title}</strong>
                </div>

                <div className="arrow">
                  <Image
                    src={'/images/icons/mini-arrow.png'}
                    width={6}
                    height={10}
                    alt=""
                  />
                </div>
              </S.SettingItem>
            ))}
          </S.Content>
        </S.SettingsSection>
      </S.Screen>
    </>
  )
}

export default AccountScreen
