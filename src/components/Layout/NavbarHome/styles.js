import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  color: #0071e3;
  padding: 0.5rem 2rem;
  font-size: 15px;
  line-height: 17px;
  @media (min-width: 600px) {
    //display: none;
    width: ${props => (props.show ? '285px' : '80px')};
    height: 100%;
    left: 0;
    top: 0;
    padding: 3rem 1rem;
    font-size: 21px;
    line-height: 17px;
    overflow: hidden;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #efeeef;
    box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.1);
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin-top: 0.5rem;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    &:hover {
      background: rgba(57, 146, 233, 0.2);
      cursor: pointer;
    }
    .name {
      margin-left: 3rem;
    }
    div {
      margin-top: 0;
    }
    &.active {
      background: rgba(57, 146, 233, 0.2);
    }
  }
`
export const Bottom = styled.div`
  display: flex;
  flex-direction: ${props => (props.show ? 'row' : 'column')};
  justify-content: space-between;
  @media (max-width: 599px) {
    display: none;
  }
  div {
    padding: 1.5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
`
