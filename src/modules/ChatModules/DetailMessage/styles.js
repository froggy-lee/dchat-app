import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 18px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0rem;
  z-index: 2;
  background: #fff;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f2f1f6;
  z-index: 1;
`
export const Back = styled.div`
  display: flex;
  align-items: center;
  color: #0071e3;
  img {
    padding-right: 1rem !important;
  }
`
export const Name = styled.div`
  font-size: 21px;
  font-weight: 600;
  text-align: center;
`
export const Infor = styled.div`
  text-align: center;
`
export const TextInput = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0rem;
  left: 0;
  //z-index: 2;
  background: #e6e6e5;
  padding: 0.5rem 0;
`
export const PinMessage = styled.div`
  width: 100%;
  height: 5rem;
  border: 1.0018px solid #e6e6e5;
  position: fixed;
  top: 5.5rem;
  left: 0;
  background: #fff;
  z-index: 1;
`
export const ChatScreen = styled.div`
  padding-top: 10rem;
  padding-bottom: 8rem;
`
export const ViewGroup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  overflow: auto;
`
