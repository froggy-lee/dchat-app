import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1.6rem;
`
export const BoxWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${props =>
    props.type == 'user' ? 'flex-start' : 'flex-end'};
  margin-top: 1rem;
`
export const Avatar = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
`
export const BoxMessage = styled.div`
  padding: 0.7rem 2rem 2.5rem 1.3rem;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  position: relative;
  max-width: 86.5%;
  border-radius: 15px;
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
