import React, { useState } from 'react'
import TigerModal from '/src/components/Modal'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import * as S from './styles'

const valuesModal = [
  {
    id: 0,
    seen: true
  },
  {
    id: 1,
    seen: false
  },
  {
    id: 2,
    seen: false
  }
]

function InstructionsModal(props) {
  const [openModal, setOpenModal] = useState(valuesModal)

  const handleSeen = id => {
    openModal.splice(id, 1, {
      id,
      seen: true
    })
    setOpenModal([...openModal])
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    dots: true,
    fade: true,
    arrows: false,
    afterChange: index => handleSeen(index)
  }

  const onToggle = () => {
    localStorage.setItem('xxx-show-tutorial', JSON.stringify(openModal))
    props.toggle()
  }

  return (
    <TigerModal isOpen onToggle={onToggle} width={60}>
      <S.Container>
        <Slider {...settings}>
          <S.Wrapper>
            <S.Des>
              Make sure you are accessing the correct domain and SSL with the
              icon{' '}
              <Image
                src="/images/icons/lock.png"
                width={11}
                height={13}
                alt="lock"
              />
            </S.Des>
            <S.Img>Image</S.Img>
          </S.Wrapper>
          <S.Wrapper>
            <S.Des>
              Connect wallet or download Metamask
              <S.System>
                <span>Browse</span>
                <span>iOS</span>
                <span>Android</span>
              </S.System>
            </S.Des>

            <S.Img>Image</S.Img>
          </S.Wrapper>
          <S.Wrapper>
            <S.Des primary>
              Tiger Currency have no email support Contact US through the
              decentralized messaging app dMessage
            </S.Des>
            <S.Img>Image</S.Img>
          </S.Wrapper>
        </Slider>
      </S.Container>
    </TigerModal>
  )
}

export default InstructionsModal
