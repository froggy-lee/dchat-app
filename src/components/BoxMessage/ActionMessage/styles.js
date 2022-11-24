import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(13px);
  .back-drop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
export const BoxMessage = styled.div`
  padding: 0.7rem 2rem 2.5rem 1.3rem;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  position: relative;
  max-width: 86.5%;
  margin-top: -20rem;
  border-radius: 15px;
  z-index: 2;
  background: ${props => (props.type == 'user' ? '#fff' : '#2A86E5')};
  color: ${props => (props.type == 'user' ? '#000' : '#fff')};
  &.me {
    border-bottom-right-radius: 0px;
  }
  &.user {
    border-bottom-left-radius: 0px;
    border: 2px solid #d8e2f1;
  }
`
export const Time = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  color: ${props => (props.type == 'user' ? '#808080' : '#fff')};
`
export const ListAction = styled.div`
  position: absolute;
  bottom: -25rem;
  right: 0;
  border: 1px solid #e3e2e8;
  border-radius: 10px;
  color: #000;
  background: #fff;
`
export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 15rem;
  border-bottom: 1px solid #e3e2e8;
  &:nth-child(5) {
    color: #e80101;
  }
  &:last-child {
    border-bottom: none;
  }
`
