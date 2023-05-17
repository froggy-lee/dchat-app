import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  font-size: 15px;
  line-height: 16px;
  color: #000000;
  &::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`
export const User = styled.div`
  padding: 0 1rem;
  scroll-snap-align: start;
`
export const Avatar = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: #f1f0f5;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Name = styled.div`
  text-align: center;
  white-space: nowrap;
`
