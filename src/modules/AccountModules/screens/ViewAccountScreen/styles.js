import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: ${props => (props.active ? 'block' : 'none')};
`

export const Screen = styled.section`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto 120px auto;
  padding: 1rem;

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

export const UserInfo = styled.div`
  position: relative;
  padding: 2rem;

  .avatar {
    position: relative;

    width: 70px;
    height: 70px;
    margin: 0 auto 0.5rem auto;
    background: #fff;
    border-radius: 50%;

    span {
      border-radius: 50%;
    }
  }

  .user-name {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 18px;

    text-align: center;

    color: #000000;
  }

  .wallet__address {
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;

      letter-spacing: 0.02em;

      color: #000000;

      margin: 0 1rem 0 0;
    }

    .icon-copy {
      display: flex;
    }
  }

  .wallet__amount {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .amount {
      margin: 0 0.5rem 0 0;
    }
  }
`

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
`

// PERSONAL SECTION

export const Content = styled.div`
  position: relative;
  padding: 0 0 0 1rem;
  border-radius: 10px;
  background: #fff;
`

export const PersonalInfoSection = styled.div`
  position: relative;
  margin: 1rem 0;
`

export const PersonalInfo = styled.div`
  position: relative;
  height: 35px;
  padding: 0 1rem 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.5px solid #f1f0f5;

  &:last-child {
    border-bottom: none;
  }

  .personal-info__title {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }

  .personal-info__content {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    color: #000000;
    display: flex;
    align-items: center;

    .personal__input {
      margin-right: 0.5rem;
    }
  }

  .social__wrapper {
    display: flex;
    align-items: center;

    .social__icon {
      width: 25px;
      height: 25px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #f1f0f5;
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
`

export const Phone = styled(PersonalInfo)``

export const Email = styled(PersonalInfo)``

export const Social = styled(PersonalInfo)``

export const NavTabSection = styled.section`
  position: relative;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tab = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 18px;

  position: relative;
  color: ${props => (props.active ? '#000' : '#808080')};
  padding: 0.5rem;

  outline: none;
  border: none;
  background: none;

  &:after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};

    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 10px);
    height: 2px;
    background: #0071e3;
  }
`

export const ContentTabs = styled.div`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);

  background: #fff;
`

export const ContentTab = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  min-height: 150px;
  padding: 0 1rem;
`
