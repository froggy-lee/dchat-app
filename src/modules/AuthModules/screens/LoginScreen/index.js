/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import { ConnectButton } from '/src/modules/AuthModules/components'
import { BASE_INFURA_KEY } from '/src/constants'
import { providers } from 'web3modal'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { ellipseAddress } from '/src/utils'
import { useRouter } from 'next/router'

const socialButtons = [
  {
    label: 'Facebook'
  },
  {
    label: 'Twitter'
  },
  {
    label: 'Telegram'
  },
  {
    label: 'Discord'
  }
]

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal,
    options: {
      infuraId: BASE_INFURA_KEY,
      rpc: {
        56: 'https://bsc-dataseed.binance.org/',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
      },
      network: 'binance'
    }
  }
}

const LoginScreen = () => {
  let web3Modal
  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [account, setAccount] = useState()
  const [chainId, setChainId] = useState()

  const router = useRouter()

  const changeNetwork = useCallback(async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(56).toString(16)}` }]
      })
    } catch (e) {
      if (e.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${Number(56).toString(16)}`,
                chainName: 'Binance Smart Chain Mainnet',
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18
                },
                blockExplorerUrls: ['https://bscscan.com'],
                rpcUrls: ['https://bsc-dataseed.binance.org/']
              }
            ]
          })
        } catch (addError) {
          // eslint-disable-next-line no-console
          console.error(addError)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (!window.ethereum) {
      providerOptions['custom-metamask'] = {
        display: {
          logo: providers.METAMASK.logo,
          name: 'Install MetaMask',
          description: 'Connect using browser wallet'
        },
        package: {},
        connector: async () => {
          window.open('https://metamask.io')
          throw new Error('MetaMask not installed')
        }
      }
    } else {
      changeNetwork()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    web3Modal = new Web3Modal({
      network: 'mainnet',
      theme: {
        background: '#fff',
        border: '#000'
      },
      cacheProvider: true,
      providerOptions
    })
  }, [])

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      router.push('/chat')
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error) {
      if (error.code === 4001) {
        // eslint-disable-next-line no-console
        console.log('Please connect to MetaMask.')
      }
    }
  }, [web3Modal, router])

  const refreshState = useCallback(() => {
    setAccount()
    setChainId()
  }, [])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        if (accounts) setAccount(accounts[0])
      }
      const handleChainChanged = _hexChainId => {
        setChainId(_hexChainId)
      }
      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
        }
      }
    }
  }, [provider])

  return (
    <S.Screen>
      <S.HelloSection>
        <S.HelloCircle>
          <S.CircleTitle>DM</S.CircleTitle>
        </S.HelloCircle>
        <S.HelloTitle>Hello</S.HelloTitle>
      </S.HelloSection>

      <ConnectButton
        label={!account ? 'Connect Wallet' : ellipseAddress(account)}
        onClick={() => connectWallet()}
      />

      <S.ConnectSocialSection>
        <S.ConnectSocialTilte>LOGIN WITH CRYPTO WALLET</S.ConnectSocialTilte>
        {socialButtons.map(social => (
          <ConnectButton
            key={social.label}
            label={social.label}
            connectSocial
          />
        ))}
      </S.ConnectSocialSection>
    </S.Screen>
  )
}

export default LoginScreen
