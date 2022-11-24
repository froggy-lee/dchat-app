import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StepFirst = styled(motion.section)`
  position: fixed;
  padding: 1rem 0;

  width: 100%;
  height: 100vh;
  margin: 0 auto;

  background: #f7f7f7;
  top: 0;
  bottom: 0;
  left: 0;
  @media (min-width: 600px) {
    //width: 475px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`

export const Description = styled.div`
  padding: 1rem 2rem;
  margin: 0.5rem auto;

  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  border: 0.5px solid #e7e7e7;
  border-left: none;
  border-right: none;

  color: #c3c3c5;
`

export const AddMemberSection = styled.section``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`

export const HeaderButton = styled.button`
  background: none;
  outline: none;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
`

export const Back = styled(HeaderButton)`
  display: flex;
  align-items: center;

  color: #3a6fb7;
`

export const IconBack = styled.div`
  margin: 5px 5px auto 0;
`

export const Next = styled(HeaderButton)`
  color: #cdcdcf;
  cursor: not-allowed !important;

  &.next {
    color: #3a6fb7;
    cursor: pointer !important;
  }
`

export const Create = styled(Next)``

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 21px;
  line-height: 18px;

  color: #333333;

  margin: 0;
`

export const Amount = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #868686;

  margin: 5px 0 0 0;
`
