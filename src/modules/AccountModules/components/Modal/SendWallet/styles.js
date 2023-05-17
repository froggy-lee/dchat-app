import styled from 'styled-components'

export const SendWallet = styled.section`
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

export const AccountWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
`

export const Account = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #1877f1;

  margin-right: 1rem;
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

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;

  padding: 1rem;
`

export const ErrorWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;

  background: #fff2f1;
  border: 1px solid #da5448;
  border-radius: 10px;
`

export const Error = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #da5448;
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  min-height: 450px;
`

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  .label {
    width: 30%;
  }

  .select {
    width: 100%;
    height: 100%;
  }
`

export const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
  margin-right: 1.5rem;

  .max {
    background: #ffffff;
    border: 0.754098px solid #267ff3;
    border-radius: 75.4098px;
    max-width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 12.8197px;
    line-height: 15px;

    color: #267ff3;
  }
`

export const SelectOption = styled.div`
  display: flex;
  align-items: center;

  .coin-icon {
    margin-right: 1rem;
    display: flex;
  }
`

export const NameCoin = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  margin: 0;
  color: #000000;
`

export const CoinBalance = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  margin: 0;
  color: #808080;
`

export const NormalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NormalInput = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  border: 1px solid #dadada;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  input {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    border: none;
    outline: none;
  }

  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #808080;
  }
`

export const Send = styled.button`
  display: flex;
  justify-content: center;

  padding: 0.5rem 1rem;
  margin: 0 auto;
  min-width: 95px;
  background: #0071e3;

  outline: none;
  border: none;
  border-radius: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
`
