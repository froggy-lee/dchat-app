import styled from 'styled-components'

export const NavTab = styled.section`
  width: 100%;
  max-width: 425px;
  margin: auto;
`

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 18px;

  padding: 0.5rem;
`

export const NavLink = styled.a`
  position: relative;
  color: #000;

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    bottom: -5px;
    left: 0;

    width: 100%;
    height: 3px;
    background: #0071e3;
  }

  &:hover {
    color: #000;
    &:after {
      display: block;
    }
  }
`
