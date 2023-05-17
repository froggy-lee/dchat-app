import styled from 'styled-components'

export const CoinWrapper = styled.div`
  display: flex;
  margin: 2rem 2rem 0 0;
  cursor: pointer;
`

export const CoinImage = styled.div`
  position: relative;
  min-width: 120px;
  margin-right: 2rem;
`

export const CoinContent = styled.div`
  .coin-item__title {
    font-family: 'Lato Bold';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    overflow: hidden;
    display: block;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    margin-bottom: 1rem;
    color: #ffffff;
  }

  .coin-item__description {
    font-family: 'Lato';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    overflow: hidden;
    display: block;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    position: relative;
    margin: 0;
    color: #ffffff;
  }
`
