import React from 'react'
import * as S from './styles'
import Navbar from '/src/components/Layout/Navbar'
import Header from '/src/components/Layout/Header'

const MainLayout = ({ children }) => {
  return (
    <S.MainLayout
      initial={{
        left: 100
      }}
      animate={{
        left: 0
      }}
      exit={{ left: 100 }}
    >
      <Header />
      {children}
      <Navbar />
    </S.MainLayout>
  )
}

export default MainLayout
