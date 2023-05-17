/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'
import { BASE_INFURA_KEY } from '/src/constants'
import { providers } from 'web3modal'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useDispatch, useSelector } from 'react-redux'
import { selectshowMenu, showMenuAction } from '/src/store/slice/showMenu'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
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

const ActiveMenu = [
  {
    href: '/',
    active: false
  },
  {
    href: '/chat',
    active: false
  },
  {
    href: '/games',
    active: false
  },
  {
    href: '/wallet',
    active: false
  }
]

function NavbarHome() {
  const router = useRouter()
  const dispatch = useDispatch()
  const showMenu = useSelector(selectshowMenu)
  let web3Modal
  const [hidenNav, sethidenNav] = useState(true)
  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [account, setAccount] = useState()
  const [chainId, setChainId] = useState()

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
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
      router.push('/chat')
    } catch (error) {
      if (error.code === 4001) {
        // eslint-disable-next-line no-console
        console.log('Please connect to MetaMask.')
      }
    }
  }, [router, web3Modal])

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

  const handleToHome = useCallback(() => {
    router.push('/')
  }, [router])

  const handleToChat = useCallback(() => {
    if (account === null || account === undefined) {
      connectWallet()
    } else {
      router.push('/chat')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  const handleShowMenu = useCallback(() => {
    dispatch(showMenuAction(!showMenu))
  }, [dispatch, showMenu])

  useEffect(() => {
    router.asPath === '/' && screen.width > 600 && sethidenNav(false)
  }, [router])

  return (
    <>
      {hidenNav && (
        <S.Container show={showMenu}>
          <S.Wrapper>
            <S.MenuItem
              onClick={() => handleToHome()}
              className={router.pathname == '/' ? 'active' : ''}
            >
              <div>
                <Image
                  src="/images/icons/home.png"
                  width={26}
                  height={26}
                  alt="Home"
                  layout="fixed"
                />
              </div>
              <div className="name">Home</div>
            </S.MenuItem>
            <S.MenuItem
              onClick={() => handleToChat()}
              className={
                router.pathname == '/chat' || router.pathname.includes('/chat')
                  ? 'active'
                  : ''
              }
            >
              <div>
                <Image
                  src="/images/icons/chat.png"
                  width={29}
                  height={26}
                  alt="Chat"
                  layout="fixed"
                />
              </div>
              <div className="name">Chat</div>
            </S.MenuItem>
            <S.MenuItem className={router.pathname == '/games' ? 'active' : ''}>
              <div>
                <Image
                  src="/images/icons/games-icon.png"
                  width={26}
                  height={26}
                  alt="Games"
                  layout="fixed"
                />
              </div>
              <div className="name">Games</div>
            </S.MenuItem>
            <S.MenuItem
              className={router.pathname == '/wallet' ? 'active' : ''}
            >
              <div>
                <Image
                  src="/images/icons/wallet-icon.png"
                  width={30}
                  height={25}
                  alt="Wallet"
                  layout="fixed"
                />
              </div>
              <div className="name">Wallet</div>
            </S.MenuItem>
            <S.MenuItem>
              <div>
                <Image
                  src="/images/icons/language.png"
                  width={26}
                  height={26}
                  alt="Language"
                  layout="fixed"
                />
              </div>
              <div className="name">En</div>
            </S.MenuItem>
          </S.Wrapper>
          <S.Bottom show={showMenu}>
            <div>
              <Image
                src="/images/icons/default-avatar.png"
                width={59}
                height={59}
                alt="avatar"
                layout="fixed"
              />
            </div>
            <div onClick={handleShowMenu}>
              <Image
                src={
                  showMenu
                    ? '/images/icons/close-menu.png'
                    : '/images/icons/show-menu.png'
                }
                width={30}
                height={30}
                alt="avatar"
                layout="fixed"
              />
            </div>
          </S.Bottom>
        </S.Container>
      )}
    </>
  )
}

export default NavbarHome
