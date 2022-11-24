import styled from 'styled-components'

export const ActivityItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActivityInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  display: flex;
  margin-right: 1rem;
`

export const Info = styled.div``

export const StatusName = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  color: #000000;
  margin: 0;

  &:first-letter {
    text-transform: capitalize;
  }
`

export const StatusDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  margin: 0;

  .date {
    position: relative;
    color: #00bf02;
    margin-right: 20px;

    &:before {
      content: '•';
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .from {
  }
`

export const AmountSection = styled.div``

export const Amount = styled(StatusName)``

export const Price = styled(StatusDescription)`
  text-align: right;
`
