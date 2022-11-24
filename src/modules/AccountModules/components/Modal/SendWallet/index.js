import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import Select from 'react-select'

const customStyles = {
  control: styles => ({
    ...styles,
    width: '100%',
    height: '50px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '12px',
    boxShadow: 'none',
    border: '1px solid #dadada',
    '&:hover': {
      borderColor: '#dadada'
    }
  }),
  singleValue: styles => ({
    ...styles,
    color: '#fff'
  }),
  menu: styles => ({
    ...styles,
    marginTop: '2px',
    padding: '5px 10px',
    zIndex: 999,
    boxShadow: 'none',
    border: '1px solid #f4f5f6',
    maxHeight: '300px'
  }),
  option: styles => {
    return {
      ...styles,
      backgroundColor: '#fff',
      color: '#000',
      fontWeight: '700',
      fontSize: '12px',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '8px',

      '&:hover': {
        backgroundColor: '#fff',
        cursor: 'pointer'
      }
    }
  }
}

const options = [
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  },
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  },
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  },
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  },
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  },
  {
    value: 'bnb',
    label: (
      <S.SelectOption>
        <div className="coin-icon">
          <Image
            src="/images/icons/bnb-icon.png"
            width={33}
            height={33}
            alt=""
          />
        </div>

        <div className="info-coin">
          <S.NameCoin>BNB</S.NameCoin>
          <S.CoinBalance>Balance: 0 BNB</S.CoinBalance>
        </div>
      </S.SelectOption>
    )
  }
]

const SendWallet = ({ active, onClose }) => {
  return (
    <S.SendWallet active={active}>
      <S.Header>
        <S.Cancel onClick={onClose}>Cancel</S.Cancel>
        <S.Title>Send to</S.Title>
      </S.Header>

      <S.AccountWrapper>
        <S.Account>
          <S.Icon>
            <Image
              src="/images/icons/select-checkbox.png"
              width={12}
              height={9}
              alt=""
            />
          </S.Icon>

          <S.AccountInfo>
            <strong className="account">Account 1</strong>
            <span className="wallet">0x8F2985739d3...63cBA2e3</span>
          </S.AccountInfo>
        </S.Account>
      </S.AccountWrapper>

      <S.Container>
        <S.ErrorWrapper>
          <S.Error>Insufficient funds for gas</S.Error>
        </S.ErrorWrapper>

        <S.InputWrapper>
          <S.InputItem>
            <S.Label className="label">Asset:</S.Label>
            <Select
              className="select"
              defaultValue={options[0]}
              styles={customStyles}
              options={options}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </S.InputItem>

          <S.InputItem>
            <S.Label className="label">
              Amount:
              <div className="max">Max</div>
            </S.Label>

            <S.NormalInputWrapper>
              <S.NormalInput>
                <input type="text" placeholder="0 BNB" />
                <span className="description">
                  No Conversion Rate Available
                </span>
              </S.NormalInput>
              <S.Error>Insufficient funds</S.Error>
            </S.NormalInputWrapper>
          </S.InputItem>

          <S.Send>Send</S.Send>
        </S.InputWrapper>
      </S.Container>
    </S.SendWallet>
  )
}

export default SendWallet
