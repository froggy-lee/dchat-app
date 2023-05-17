import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import AlphabetList from 'react-alphabet-list'

const Contact = ({ data, isChecked, onChange }) => {
  const arrayName = []

  const loop = array => {
    for (const element of array) {
      const userString = `${element.username}contact-field:${element.avatar}contact-field:${element.userId}`

      arrayName.push(userString)
    }
    return arrayName
  }

  return (
    <S.Contact>
      <S.SearchBox>
        <S.Search
          type="text"
          name="name"
          placeholder="Who would you like to add?"
        />
      </S.SearchBox>

      <S.ListInfoContactSection>
        <AlphabetList
          className="alpha-list"
          data={loop(data)}
          generateFn={user => (
            <S.InfoContact key={user.split('contact-field:')[2]}>
              {isChecked && (
                <S.Checkbox>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={onChange}
                    value={user.split('contact-field:')[2]}
                    id={`${user.split('contact-field:')[2]}`}
                  />
                  <label
                    htmlFor={`${user.split('contact-field:')[2]}`}
                    className="mask"
                  ></label>
                </S.Checkbox>
              )}
              <S.InfoWrapper>
                <S.Avatar>
                  <Image
                    src={
                      user.split('contact-field:')[1] ||
                      '/images/icons/default-avatar.png'
                    }
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="info-avatar"
                  />
                </S.Avatar>
                <S.Info>
                  <S.Name>
                    {user.split('contact-field:')[0] || 'Default name'}
                  </S.Name>
                  <S.LastSeen>last seen 25 minutes ago</S.LastSeen>
                </S.Info>
              </S.InfoWrapper>
            </S.InfoContact>
          )}
        />
      </S.ListInfoContactSection>
    </S.Contact>
  )
}

export default Contact
