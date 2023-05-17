import styled from 'styled-components'

export const WalletItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  background: #fff;
  color: #808080;

  border: none;
  border-radius: 10px;
  outline: none;

  min-width: 150px;
  width: 100%;
  height: 35px;
  margin: 0.5rem 0;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  .wallet__index {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    margin-right: 1rem;
  }

  .wallet__address {
    margin-right: 1rem;
  }

  .icon {
    position: relative;
    width: 20px;

    span {
      border-radius: 50%;
    }
  }
`
