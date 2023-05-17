import styled from 'styled-components'

export const Screen = styled.section`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: calc(100vh - 50px);
  margin: 15px auto 120px auto;

  overflow: hidden;

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

  .alpha-list {
    width: 100%;
    height: 100%;

    & > div:first-child {
      padding-right: 0 !important;

      & > div {
        & > div:first-child {
          padding: 0.5rem 2rem 0 2rem;

          font-weight: 600;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: -0.1px;

          color: #8e8e8e !important;
        }
        & > div:nth-child(2) {
          margin-bottom: 0 !important;
        }
      }
    }

    div:nth-child(2) {
      top: 15% !important;
      right: 25px !important;

      div {
        font-style: normal;
        font-weight: 400;
        font-size: 14px !important;
        line-height: 16px;

        color: #1877f1 !important;
      }
    }
  }
`
