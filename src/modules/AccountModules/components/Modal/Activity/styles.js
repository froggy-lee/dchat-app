import styled from 'styled-components'

export const Activity = styled.section`
  display: ${props => (props.active ? 'block' : 'none')};

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;

  margin-bottom: 120px;

  &:before {
    content: '';

    position: fixed;
    z-index: -999;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: #f1f0f5;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
`

export const HeaderButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #0071e3;

  outline: none;
  border: none;
  background: none;
`

export const Cancel = styled(HeaderButton)``

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
  margin: 0;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const NavTabSection = styled.section`
  position: relative;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const Tab = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 18px;

  position: relative;
  color: ${props => (props.active ? '#000' : '#808080')};
  padding: 0.5rem;
  margin-right: 0.5rem;

  outline: none;
  border: none;
  background: none;

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};

    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 10px);
    height: 2px;
    background: #0071e3;
  }
`

export const ContentTabs = styled.div`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);

  background: #fff;
`

export const ContentTab = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  min-height: 150px;
  padding: 0 1rem 115px 1rem;
`
