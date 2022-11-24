import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 5.8rem 0;
  color: #0071e3;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 2s;
  @media (min-width: 600px) {
    width: 482px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .search {
    padding: 0 1.8rem;
  }
`
export const Header = styled.div`
  display: flex;
  background: #f7f7f7;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem 1.8rem;
  font-size: 21px;
  .none {
    visibility: hidden;
  }
  div {
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 600px) {
    width: 480px;
    left: ${props => (props.show ? '285px' : '85px')};
    transition: all 0.5s;
  }
`
export const Title = styled.div`
  line-height: 18px;
  color: #333333;
`
export const ListAction = styled.div`
  margin-top: 0.8rem;
  border-top: 1px solid #e6e6e5;
  background: #fff;
  padding: 0 1.8rem;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  .name,
  .name1 {
    border-bottom: 1px solid #e6e6e5;
    padding: 1.6rem 0;
    margin-left: 1.5rem;
    width: 88%;
  }
  .name1 {
    margin-left: 2rem;
  }
  &:hover {
    cursor: pointer;
  }
`
