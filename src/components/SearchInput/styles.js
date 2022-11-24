import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 40px;

  position: relative;
`
export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  margin-left: 0.2rem;
  position: absolute;
  border-radius: 40px;
`
export const Input = styled.input`
  transition: all 0.7s;
  width: 100%;
  font-size: 17px;
  line-height: 17px;
  padding: 1.2rem;
  padding-left: 4.2rem;
  border-radius: 40px;
  border: none;
  background: #fff;
  &::placeholder {
    color: #949494;
  }
`
