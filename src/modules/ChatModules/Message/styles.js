import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  color: #000;
  position: relative;
  :before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50px;
    position: absolute;
    top: 47%;
    left: -1rem;
    background: #0071e3;
    display: ${props => (props.status ? 'none' : 'block')};
  }
  &.active {
    background-color: #0071e3;
    border-radius: 20px;
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const TextMessage = styled.div`
  width: calc(100% - 77px);
  padding: 0.8rem 0.8rem 1rem 0rem;
`
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right-name {
    display: flex;
    align-items: center;
  }
`
export const User = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  color: #333333;
  &.active {
    color: #fff;
  }
`
export const Time = styled.div`
  font-size: 17px;
  color: #808080;
`
export const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
`
export const Text = styled.div`
  width: 100%;
  height: 3.6rem;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Total = styled.div`
  font-size: 16px;
  line-height: 18px;
  background: #e1e1e1;
  color: #808080;
  border-radius: 78px;
  padding: 0.2rem 0.5rem;
`
