import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;

  position: relative;
`
export const Search = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
  padding-right: 0.8rem;
  padding-left: 2.8rem;
  margin-left: 1.1rem;
  border-radius: 5px;
  background: #eeeef0;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`
export const Input = styled.input`
  transition: all 0.7s;
  width: 100%;
  font-size: 17px;
  line-height: 17px;
  padding: 1.2rem;
  padding-left: 6rem;
  margin-left: 1rem;
  border-radius: 5px;
  border: none;
  background: #eeeef0;
  &::placeholder {
    color: #949494;
  }
`
