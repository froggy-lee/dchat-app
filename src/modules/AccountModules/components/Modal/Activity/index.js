import React, { useState } from 'react'
import * as S from './styles'
import { listActivity } from '/src/modules/AccountModules/data'
import {
  AllTab,
  SendTab,
  ReceiptTab
} from '/src/modules/AccountModules/components/Tabs'

const Activity = ({ active, onClose }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== activeTab) {
      setActiveTab(index)
    }
  }

  return (
    <S.Activity active={active}>
      <S.Header>
        <S.Cancel onClick={onClose}>Cancel</S.Cancel>
        <S.Title>Activity</S.Title>
      </S.Header>

      <S.NavTabSection>
        <S.Tabs>
          {listActivity.map(item => (
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
          {/* All tab */}
          <S.ContentTab active={activeTab === 0}>
            <AllTab />
          </S.ContentTab>

          {/* Send tab */}
          <S.ContentTab active={activeTab === 1}>
            <SendTab />
          </S.ContentTab>

          {/* Receipt tab */}
          <S.ContentTab active={activeTab === 2}>
            <ReceiptTab />
          </S.ContentTab>
        </S.ContentTabs>
      </S.NavTabSection>
    </S.Activity>
  )
}

export default Activity
