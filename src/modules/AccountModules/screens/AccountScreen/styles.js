import styled from 'styled-components'

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
`

export const Section = styled.div`
  position: relative;
  margin: 1rem 0;
`

export const Content = styled.div`
  position: relative;
  border-radius: 10px;
  background: #fff;
  padding: 0 0 0 1rem;
`

// CRYPTO WALLET SECTION

export const CryptoWalletSection = styled(Section)``

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #808080;

  margin-left: 1rem;
`

// PERSONAL SECTION

export const PersonalInfoSection = styled(Section)``

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
    display: flex;
    align-items: center;

    .personal__input {
      margin-right: 0.5rem;
    }
  }

  .icon {
    display: flex;
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

// SETTINGS SECTION

export const SettingsSection = styled(Section)``

export const SettingItem = styled.div`
  position: relative;
  height: 35px;
  cursor: pointer;
  padding: 0 1rem 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.5px solid #f1f0f5;

  &:last-child {
    border-bottom: none;
  }

  .setting__content {
    display: flex;
    align-items: center;

    .icon {
      position: relative;
      display: flex;
      margin-right: 1rem;
    }

    .setting__title {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #000000;
    }
  }
`
