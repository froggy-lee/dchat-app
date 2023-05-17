import styled from 'styled-components'

export const SendUser = styled.section`
  position: relative;
  display: ${props => (props.active ? 'block' : 'none')};

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

export const Next = styled(HeaderButton)``

export const Search = styled.div`
  position: relative;
  width: 100%;
  border-top: 0.2px solid rgba(203, 203, 203, 0.5);
  border-bottom: 0.2px solid rgba(203, 203, 203, 0.5);

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #808080;

  input {
    width: 100%;
    height: 40px;
    padding: 0 1rem;

    border: none;
    outline: none;
    background: none;
  }
`

export const ListAccount = styled.div`
  position: relative;
  background: #fff;

  height: calc(100vh - 85px);
`

export const Account = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.2px solid rgba(203, 203, 203, 0.5);
  cursor: pointer;
`

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;

  .account {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }

  .wallet {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #808080;
  }
`
