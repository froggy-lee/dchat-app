import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem;
  background: #fff;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;

  font-size: 17px;
  line-height: 16px;
  color: #808080;
  margin-top: 1rem;
  .checkbox {
    display: inline-block;
    height: 18px;
    position: relative;
    width: 18px;
    border-radius: 50%;
    background: #fff;
    border: 0.5px solid #cbcbcb;
    margin-right: 0.5rem;
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

        background: url('/images/icons/select-checkbox.png') no-repeat;
        background-size: 80%;
        background-position: center;
      }
    }
  }
`
export const CheckBox = styled.input`
  border-radius: 50% !important;
  background: red;
`
export const Avatar = styled.div`
  margin-right: 1.7rem;
`
export const UserName = styled.div`
  color: #000;
  font-weight: 600;
`
