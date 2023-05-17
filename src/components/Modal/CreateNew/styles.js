import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 19px;
  background: #f1f0f5;
  position: fixed;
  top: 0;
  bottom: 11.5rem;
  left: 0;
  width: 100%;
  z-index: 2;
  //padding: 6rem 0;
  padding-top: 6rem;
  overflow-y: auto;
  .contacts {
    height: calc(100vh - 420px);
    overflow-y: scroll;
    @media (min-width: 600px) {
      height: calc(100vh - 230px);
    }
  }
`
export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  background: #f1f0f5;
`
export const Cancel = styled.div`
  color: #0071e3;
  &.hide {
    visibility: hidden;
  }
`
export const Create = styled.div`
  font-size: 18px;
  font-weight: 600;
`
export const ListAction = styled.div`
  margin: 1rem;
  background: #ffffff;
  border-radius: 10px;
  height: 10.5rem;
`
export const Action = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  border-bottom: 0.5px solid #f1f0f5;
`
export const Next = styled.div`
  position: absolute;
  right: 1rem;
`
export const Icon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`
export const ContactTitle = styled.div`
  text-transform: uppercase;
  color: #808080;
  margin-left: 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`
