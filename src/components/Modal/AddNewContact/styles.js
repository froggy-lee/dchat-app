import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 19px;
  background: #f1f0f5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding-top: 6rem;
  overflow-y: auto;
  .contacts {
    height: calc(100vh - 395px);
    overflow-y: auto;
    @media (min-width: 600px) {
      height: calc(100vh - 300px);
    }
  }
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  background: #f1f0f5;
`
export const Cancel = styled.div`
  color: #0071e3;
  &.hide {
    visibility: hidden;
  }
`
export const Contacts = styled.div`
  font-size: 18px;
  font-weight: 600;
`
export const ListAction = styled.div`
  margin: 1rem;
  background: #ffffff;
  border-radius: 10px;
`
export const Title = styled.div`
  text-transform: uppercase;
  color: #808080;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;
`
export const Form = styled.div`
  margin: 0 1rem;
  background: #fff;
  border-radius: 10px;
`
export const Input = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 25% 75%;
  border-bottom: 0.5px solid #f1f0f5;
  input {
    border: none;
  }
`
export const Create = styled.div`
  color: #1877f1;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-weight: 500;
`
