import styled from 'styled-components'

export const ConnectButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  background: ${props => (props.connectSocial ? '#fff' : ' #1877F1')};
  color: ${props => (props.connectSocial ? '#0071E3' : ' #fff')};

  border: none;
  border-radius: 10px;
  outline: none;

  min-width: 150px;
  width: 100%;
  height: 35px;
  margin: 0.5rem 0;
`
