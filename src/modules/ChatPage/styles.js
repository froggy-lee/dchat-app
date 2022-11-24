import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 5rem 2rem;
  position: relative;
  @media (min-width: 600px) {
    width: 482px;
    //height: 100%;
    position: fixed;
    overflow-y: scroll;
    height: 100%;
    margin-left: ${props => (props.show ? '285px' : '85px')};
    border-right: 1px solid #efeeef;
    box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
`
export const Edit = styled.div`
  position: absolute;
  width: 100%;
  top: 1rem;
  left: 0;
  padding: 0 2rem;
`
export const Title = styled.div`
  font-size: 38px;
  line-height: 45px;
  color: #000000;
  margin-left: 1rem;
  margin-bottom: 1.2rem;
`
export const ListMessage = styled.div`
  margin-top: 2rem;
`
export const Modal = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background: #fff;
  //margin-left: 100%;
  //z-index: 5;
`
