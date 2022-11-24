import styled from 'styled-components'

export const Header = styled.section`
  position: fixed;
  z-index: 9;

  padding: 0.5rem;
  width: 100%;
  height: 55px;
  background: #f1f0f5;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderItem = styled.div``

export const Edit = styled(HeaderItem)`
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #0071e3;
`

export const Title = styled(HeaderItem)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #808080;
`

export const Currency = styled(HeaderItem)`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;

  color: #0071e3;
  text-transform: uppercase;
`
