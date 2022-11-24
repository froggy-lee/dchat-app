import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20rem 10rem;
  display: grid;
  grid-template-columns: 63% 35%;
  grid-gap: 2%;
  padding-bottom: 20rem;
  @media (max-width: 1250px) {
    padding: 20rem 5rem;
  }
  @media (max-width: 1111px) {
    display: block;
  }
  @media (max-width: 750px) {
    padding: 15rem 2rem;
  }
`
export const Back = styled.div`
  position: absolute;
  top: 16rem;
  left: 10rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1250px) {
    left: 5rem;
  }
  @media (max-width: 750px) {
    left: 2rem;
    top: 11rem;
  }
`
