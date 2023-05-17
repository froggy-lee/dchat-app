import React from 'react'
import * as S from './styles'
import AlphabetList from 'react-alphabet-list'
import { ContactItem } from '/src/modules/AccountModules/components'
import { USERS } from '/src/constants/data'
import { AccountHeader } from '/src/modules/AccountModules/components'
import { PlusIcon } from '/public/svgs'
import { useRouter } from 'next/router'

const ContactScreen = () => {
  const router = useRouter()

  const arrayName = []

  const convertDataToString = array => {
    for (const element of array) {
      const userString = `${element.username}contact-field:${element.avatar}contact-field:${element.userId}`

      arrayName.push(userString)
    }
    return arrayName
  }

  const onChangeBack = () => router.back()

  const onRedirectRouter = id => router.push(`/account/${id}`)

  return (
    <>
      <AccountHeader
        back
        leftFunction={onChangeBack}
        title="Contacts"
        rightButton
        rightLabel={<PlusIcon />}
      />
      <S.Screen>
        <AlphabetList
          className="alpha-list"
          data={convertDataToString(USERS)}
          generateFn={user => (
            <ContactItem
              key={user.split('contact-field:')[2]}
              avatar={user.split('contact-field:')[1]}
              name={user.split('contact-field:')[0]}
              onRedirectRouter={() =>
                onRedirectRouter(user.split('contact-field:')[2])
              }
            />
          )}
        />
      </S.Screen>
    </>
  )
}

export default ContactScreen
