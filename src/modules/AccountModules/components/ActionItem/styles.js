import styled from 'styled-components'

export const ActionItem = styled.button`
  width: 54px;
  height: 54px;
  background: #fff;

  border: none;
  border-radius: 10px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .action__icon {
    position: relative;
    margin: 0 auto;
  }

  .active__title {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #808080;
  }
`
