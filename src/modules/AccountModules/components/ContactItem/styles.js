import styled from 'styled-components'

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: none;

  padding: 0.5rem 2rem;
  background: white;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`

export const Avatar = styled.div`
  position: relative;
  margin-right: 5px;
  min-width: 40px;
  height: 40px;

  span {
    border-radius: 50%;
    padding: 0;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  text-align: left;
`

export const Name = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.4px;

  color: #000000;
  margin: 0;
`

export const LastSeen = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  color: #7e7e82;
  margin: 0;
`
