import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`
export const ChatScreen = styled.div`
  position: relative;
  @media (min-width: 600px) {
    margin-left: ${props => (props.show ? '77rem' : '57rem')};
    padding: ${props => (props.show ? '0 1rem' : '0 2rem')};
  }
  @media (min-width: 1150px) {
    margin-left: ${props => (props.show ? '77rem' : '57rem')};
    padding: ${props => (props.show ? '0 5rem' : '0 10rem')};
  }
`
export const ListMessege = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
export const TextInput = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  @media (min-width: 600px) {
    bottom: 1rem;
    width: ${props =>
      props.show ? 'calc(100% - 77rem)' : 'calc(100% - 57rem)'};
    margin-left: ${props => (props.show ? '77rem' : '57rem')};
    padding: ${props => (props.show ? '0 5rem' : '0 15rem')};
  }
`
export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  transition: all 0.5s;
  @media (min-width: 600px) {
    left: 0;
    width: ${props =>
      props.show ? 'calc(100% - 77rem)' : 'calc(100% - 57rem)'};
    margin-left: ${props => (props.show ? '77rem' : '57rem')};
  }
`
export const Content = styled.div`
  margin-top: 5rem;
`
export const Infor = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 5rem;
  overflow: scroll;
  width: 100%;
  height: 100%;
  background: #fff;
  margin-left: ${props => (props.toggle ? 0 : '100%')};
  transition: all 0.9s;
  @media (min-width: 600px) {
    //position: absolute;
    //right: 0;
    left: ${props => (props.show ? '77rem' : '57rem')};
    bottom: 0;
    width: ${props =>
      props.show ? 'calc(100% - 77rem)' : 'calc(100% - 57rem)'};
  }
`
