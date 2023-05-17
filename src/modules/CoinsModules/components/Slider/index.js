import React, { useRef, useEffect } from 'react'
import * as S from './styles'
import Slider from 'react-slick'
import Image from 'next/image'

const SliderProjects = ({ data, isPause }) => {
  const slidersRef = useRef()

  useEffect(() => {
    if (isPause) {
      slidersRef?.current?.slickPause()
    } else {
      slidersRef?.current?.slickPlay()
    }
  }, [isPause])

  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <S.SliderWrapper>
      <Slider {...settings} ref={slidersRef}>
        {data.map(item => (
          <div key={item.id}>
            <S.Item>
              <Image
                src={item.image}
                width={513}
                height={240}
                alt={`slide-${item.id}`}
              />
            </S.Item>
          </div>
        ))}
      </Slider>
    </S.SliderWrapper>
  )
}

export default SliderProjects
