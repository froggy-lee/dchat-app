import styled from 'styled-components'

export const AssetsTab = styled.section``

export const AssetsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .coin-info {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #f2f1f6;
      margin-right: 0.5rem;
    }

    .info {
      display: flex;
      flex-direction: column;

      strong {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;

        color: #000000;
      }

      .coin-info__name {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: #808080;
      }
    }
  }
`

export const ValueSection = styled.div`
  display: flex;
  flex-direction: column;

  .font {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #808080;
  }

  .bold {
    font-weight: 600;
  }

  .value-section__price {
  }
`

export const ValuePercentSection = styled.div`
  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: right;

    color: #000000;
  }
  .percent {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    background: #65c466;
    border-radius: 6px;
    padding: 0.5rem 0.2rem;
    text-align: center;

    color: #ffffff;
    margin-left: auto;
    max-width: 70px;
  }
`
