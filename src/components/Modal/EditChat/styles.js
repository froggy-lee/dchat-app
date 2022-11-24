import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 19px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: 6rem 0;
  overflow-y: auto;
`
export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f1f0f5;
`
export const Edit = styled.div`
  color: #0071e3;
  font-size: 21px;
  line-height: 25px;
  &.hide {
    visibility: hidden;
  }
`
export const EditChat = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
`
export const GroupMessage = styled.div`
  display: flex;
  padding: 0.7rem 0.5rem;
`
export const All = styled.div`
  margin-right: 2.4rem;
`
export const Name = styled.span`
  padding-bottom: 0.5rem;
  font-weight: 500;
  &.active {
    border-bottom: 2px solid #0071e3;
  }
`
export const Total = styled.span`
  font-size: 16px;
  line-height: 18px;
  background: #e1e1e1;
  color: #808080;
  border-radius: 78px;
  padding: 0.2rem 0.5rem;
  margin-left: 0.6rem;
`
export const Footer = styled.div`
  font-size: 21px;
  line-height: 25px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  background: #f1f0f5;
  color: #0071e3;
  padding: 1rem;
`
export const Message = styled.div``
