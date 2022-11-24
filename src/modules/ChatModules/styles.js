import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 6rem 0 12rem 0;

  font-size: 17px;
  line-height: 18px;
  color: #000000;
`
export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f2f1f6;
`
export const Edit = styled.div`
  font-size: 21px;
  line-height: 25px;
  color: #0071e3;
`
export const Chat = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #000000;
`
export const Slide = styled.div`
  padding-left: 1.8rem;
  padding-right: 0.5rem;
`
export const GroupMessage = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
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
export const Message = styled.div`
  border-top: 0.5px solid #cccccc;
  padding-left: 1.7rem;
`
