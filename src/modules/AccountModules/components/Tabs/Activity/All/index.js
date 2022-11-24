import React from 'react'
import * as S from './styles'
import { ActivityItem } from '/src/modules/AccountModules/components'
import { LIST_ACTIVITY } from '/src/modules/AccountModules/data'

const AllTab = () => {
  return (
    <S.AllTab>
      {LIST_ACTIVITY.map(item => (
        <ActivityItem
          key={item.id}
          activity={item.activity}
          date={item.date}
          status={item.status}
          address={item.address}
          amount={item.amount}
          totalPrice={item.totalPrice}
        />
      ))}
    </S.AllTab>
  )
}

export default AllTab
