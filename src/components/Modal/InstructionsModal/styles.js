import styled from 'styled-components'

export const Container = styled.div`
  .slick-slider {
    .slick-dots {
      li {
        button:before {
          font-size: 14px;
          color: #a6a6a6;
          opacity: 1;
        }
      }
    }
    .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #fff;
    }
  }
`
export const Wrapper = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #333333;
`
export const Des = styled.div`
  padding: ${props =>
    props.primary ? '3rem 1rem 5rem 1rem' : '3rem 5rem 5rem 5rem'};
`
export const System = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #0071e3;
`
export const Img = styled.div`
  width: 100%;
  height: 30rem;
  background: #d9d9d9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
