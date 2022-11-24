import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  padding: 4px 16px;
  border-top: 1px solid #e6e6e5;
  @media (min-width: 600px) {
    border: 1px solid #e6e6e5;
    border-radius: 15px;
  }
`
export const Form = styled.form`
  position: relative;
  width: 100%;
  margin-left: 1rem;
`
export const Input = styled.input`
  padding: 1rem 5rem 1rem 1.8rem;
  background: #fff;
  border-radius: 20px;
  border: none;
  width: 100%;
`
export const Button = styled.button`
  position: absolute;
  padding: 0.5rem;
  right: 0;
  height: 100%;
  border-radius: 20px;
  border: none;
  background: #fff;
`
