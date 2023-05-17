import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;

  font-size: 16px;
  line-height: 19px;
  background: #f1f0f5;
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0071e3;
  background: #f1f0f5;
  z-index: 1;
`
export const Back = styled.div`
  display: flex;
  align-items: center;
  img {
    padding-right: 1rem !important;
  }
`
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 50% !important;
  }
`
export const UserName = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  margin-top: 1.4rem;
  margin-bottom: 0.5rem;
`
export const AddressWallet = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Copy = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
export const Price = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Refresh = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
export const ListButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`
export const Button = styled.div`
  background: #fff;
  padding-bottom: 1.2rem;
  border-radius: 15px;
  font-size: 15px;
  color: #808080;
  text-align: center;
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const BoxDescription = styled.div`
  background: #fff;
  padding: 1rem;
  width: 94%;
  margin: auto;
  border-radius: 10px;
  margin-top: 2rem;
  color: #808080;
`
export const ShareLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const Link = styled.div`
  color: #000;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Des = styled.div`
  color: #000;
`
export const ListInfor = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 1rem;
  margin-top: 1rem;
`
export const ListMember = styled.div``
