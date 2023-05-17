import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import {
  CopyIcon,
  RefreshIcon,
  ChatIcon,
  VoiceIcon,
  MuteIcon,
  SendIcon,
  ActivityIcon
} from '/public/svgs'
import { listSocial, listNavAccount } from '/src/modules/AccountModules/data'
import {
  ActionItem,
  SendUser,
  Activity
} from '/src/modules/AccountModules/components'
import {
  AssetsTab,
  TransactionsTab,
  MediaTab,
  LinksTab,
  FileTab
} from '/src/modules/AccountModules/components/Tabs'
import { AccountHeader } from '/src/modules/AccountModules/components'
import { useRouter } from 'next/router'

const ViewAccountScreen = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [sendActive, setSendActive] = useState(false)
  const [activityActive, setActivityActive] = useState(false)
  const router = useRouter()

  const handleActiveTab = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== activeTab) {
      setActiveTab(index)
    }
  }

  const onChangeBack = () => router.back()

  const openModalSend = () => setSendActive(true)

  const closeModalSend = () => setSendActive(false)

  const openModalActivity = () => setActivityActive(true)

  const closeModalActivity = () => setActivityActive(false)

  return (
    <>
      <S.Container active={!sendActive}>
        <AccountHeader back leftFunction={onChangeBack} />
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

            <div className="wallet__address">
              <p>0x8F2985739d3...63cBA2e3</p>
              <span className="icon-copy">
                <CopyIcon />
              </span>
            </div>

            <div className="wallet__amount">
              <h1 className="amount user-name">$250,000.00</h1>
              <span>
                <RefreshIcon />
              </span>
            </div>
          </S.UserInfo>

          <S.ActionSection>
            <ActionItem title="chat" icon={<ChatIcon />} />

            <ActionItem title="voice" icon={<VoiceIcon />} />

            <ActionItem title="mute" icon={<MuteIcon />} />

            <ActionItem
              title="send"
              icon={<SendIcon />}
              onClick={openModalSend}
            />

            <ActionItem
              title="activity"
              icon={<ActivityIcon />}
              onClick={openModalActivity}
            />
          </S.ActionSection>

          <S.PersonalInfoSection>
            <S.Content>
              <S.Phone>
                <strong className="personal-info__title">Phone</strong>

                <div className="personal-info__content">+1 234 56789</div>
              </S.Phone>

              <S.Email>
                <strong className="personal-info__title">Email</strong>

                <div className="personal-info__content">Info@dmessage.org</div>
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
                </div>
              </S.Social>
            </S.Content>
          </S.PersonalInfoSection>

          <S.NavTabSection>
            <S.Tabs>
              {listNavAccount.map(item => (
                <S.Tab
                  key={item.id}
                  id={item.id}
                  active={activeTab === item.id}
                  onClick={handleActiveTab}
                >
                  {item.name}
                </S.Tab>
              ))}
            </S.Tabs>

            <S.ContentTabs>
              {/* Assets tab */}
              <S.ContentTab active={activeTab === 0}>
                <AssetsTab />
              </S.ContentTab>

              {/* Transactions tab */}
              <S.ContentTab active={activeTab === 1}>
                <TransactionsTab />
              </S.ContentTab>

              {/* Links tab */}
              <S.ContentTab active={activeTab === 2}>
                <LinksTab />
              </S.ContentTab>

              {/* Media tab */}
              <S.ContentTab active={activeTab === 3}>
                <MediaTab />
              </S.ContentTab>

              {/* File tab */}
              <S.ContentTab active={activeTab === 4}>
                <FileTab />
              </S.ContentTab>
            </S.ContentTabs>
          </S.NavTabSection>
        </S.Screen>
      </S.Container>
      {sendActive && <SendUser active={sendActive} onClose={closeModalSend} />}
      {activityActive && (
        <Activity active={activityActive} onClose={closeModalActivity} />
      )}
    </>
  )
}

export default ViewAccountScreen
