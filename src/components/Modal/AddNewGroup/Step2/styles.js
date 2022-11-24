import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StepSecond = styled(motion.section)`
  font-size: 16px;
  line-height: 19px;
  background: #f1f0f5;
  //padding-top: 9rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 9rem 0 6rem 0;
  overflow-y: auto;
  @media (min-width: 600px) {
    //width: 485px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`

export const ChangeImage = styled.div`
  position: relative;
  padding: 1.5rem;
  margin: 1rem;
  background: #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;
`

export const ButtonAvatar = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e5f1ff;
  margin-right: 2rem;

  position: relative;
  cursor: pointer;

  .upload-button {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  #upload {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`

export const Preview = styled.div`
  position: relative;
  min-width: 60px;
  height: 60px;
  border-radius: 50%;

  span {
    border-radius: 50%;
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;

    font-weight: 400;
    font-size: 23px;
    line-height: 27px;

    color: #3a6fb7;

    &::placeholder {
      opacity: 0.5;
    }
  }
`

export const ListMember = styled.div``

export const Member = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 0 2rem;
  background: white;
`

export const Avatar = styled.div`
  position: relative;
  margin-right: 5px;
  width: 40px;
  height: 40px;
`

export const Info = styled.div`
  width: 100%;
  margin: 1rem;
  padding-bottom: 0.5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e5;
  text-align: left;
`

export const Name = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.4px;

  color: #000000;
  margin: 0;
`

export const LastSeen = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  color: #7e7e82;
  margin: 0;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #f1f0f5;
  padding: 1rem;
`

export const HeaderButton = styled.button`
  background: none;
  outline: none;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const Back = styled(HeaderButton)`
  display: flex;
  align-items: center;

  color: #0071e3;
`

export const IconBack = styled.div`
  margin: 5px 5px auto 0;
`

export const Next = styled(HeaderButton)`
  color: #0071e3;
`

export const Create = styled(Next)`
  color: #0071e3;
  cursor: pointer !important;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #000;

  margin: 0;
`

export const Amount = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #868686;

  margin: 5px 0 0 0;
`
