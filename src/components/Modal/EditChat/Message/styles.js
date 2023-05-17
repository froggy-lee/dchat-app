import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  line-height: 18px;
  color: #808080;
  position: relative;
  padding: 0 1rem 0 0.5rem;
  border-top: 0.5px solid #ccc;
  &:hover {
    cursor: pointer;
  }
  .checkbox {
    display: inline-block;
    height: 18px;
    position: relative;
    width: 18px;
    border-radius: 50%;
    background: #fff;
    border: 0.5px solid #cbcbcb;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    display: none;
    &:checked ~ .checkbox {
      background-color: #0071e3;
      /* background: url('/images/icons/select-checkbox.png');
      background-size: 100%; */
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;

        background: url('/images/icons/select-checkbox1.png') no-repeat;
        background-size: 80%;
        background-position: center;
      }
    }
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
  border-radius: 78px;
  padding: 0.2rem 0.5rem;
`
