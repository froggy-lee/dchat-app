import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const listSocial = [
  {
    name: 'facebook',
    img: '/images/icons/facebook.png'
  },
  {
    name: 'twitter',
    img: '/images/icons/twitter.png'
  },
  {
    name: 'instagram',
    img: '/images/icons/instagram.png'
  },
  {
    name: 'linkedin',
    img: '/images/icons/linkedin.png'
  },
  {
    name: 'telegram',
    img: '/images/icons/telegram.png'
  },
  {
    name: 'reddit',
    img: '/images/icons/reddit.png'
  }
]

function InforShortcut() {
  return (
    <S.Wrapper>
      <S.Title>Info Shortcut</S.Title>
      <S.WrapperContent>
        <S.ImgBtc></S.ImgBtc>
        <S.Logo>
          <Image
            src="/images/icons/btc.png"
            width={115}
            height={115}
            alt="btc"
          />
        </S.Logo>
        <S.Link>
          <Link href="www.bitcoin.com">
            <a target="_blank">www.bitcoin.com</a>
          </Link>
        </S.Link>
        <S.Des>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </S.Des>
        <S.ListSocial>
          {listSocial.map(social => {
            return (
              <span key={social.name}>
                <Image
                  src={social.img}
                  width={37}
                  height={37}
                  alt={social.name}
                />
              </span>
            )
          })}
        </S.ListSocial>
        <S.Share>Share</S.Share>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default InforShortcut
