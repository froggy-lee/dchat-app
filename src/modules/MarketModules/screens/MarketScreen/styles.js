import styled from 'styled-components'

export const MarketScreen = styled.section`
  position: relative;
  padding: 125px 0;
  background: #fff;

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

export const CoinList = styled.div`
  position: relative;
  max-width: 425px;
  overflow-x: scroll;
  margin: auto;
`

// NavTab

export const NavTabSection = styled.section`
  position: relative;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tab = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 18px;

  position: relative;
  color: ${props => (props.active ? '#000' : '#808080')};
  padding: 0.5rem;

  outline: none;
  border: none;
  background: none;

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};

    position: absolute;
    z-index: 0;
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
  padding: 0 1rem;
`
