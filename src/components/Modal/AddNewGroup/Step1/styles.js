import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 19px;
  background: #f1f0f5;
  padding-top: 9rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding-top: 10rem;
  overflow-y: auto;
  .contacts {
    height: calc(100vh - 215px);
    overflow-x: scroll;
    @media (min-width: 600px) {
      height: calc(100vh - 300px);
    }
  }
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #f1f0f5;
`
export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`
export const Cancel = styled.div`
  color: #0071e3;
`
export const NewGroup = styled.div`
  font-weight: 600;
  font-size: 18px;
`
export const Search = styled.div`
  padding: 0.5rem 1rem;
  font-size: 17px;
  line-height: 20px;
  color: #808080;
  margin-top: 1rem;
  border-top: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
  input {
    width: 100%;
    border: none;
    background: #f1f0f5;
  }
`
export const Title = styled.div`
  text-transform: uppercase;
  color: #808080;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;
`
