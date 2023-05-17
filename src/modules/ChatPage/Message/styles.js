import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  line-height: 18px;
  color: #808080;
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
  height: 10rem;
  border-top: 1px solid #cccccc;
  padding: 0.8rem 0.8rem 1.5rem 0rem;
  &.active {
    border-top: none;
  }
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
  font-size: 21px;
  line-height: 25px;
  color: #333333;
  &.active {
    color: #fff;
  }
`
export const Time = styled.div`
  font-size: 15px;
  margin-right: 1rem;
`
export const Text = styled.div`
  width: 100%;
  height: 5.4rem;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
