import styled from 'styled-components'

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
