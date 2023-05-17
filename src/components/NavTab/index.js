import React from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavTab = ({ NavItems }) => {
  const router = useRouter()

  return (
    <S.NavTab>
      <S.Nav>
        {NavItems.map(item => (
          <S.NavItem key={item.name}>
            <Link href={item.href} passHref>
              <S.NavLink active={router.pathname === item.href}>
                {item.name}
              </S.NavLink>
            </Link>
          </S.NavItem>
        ))}
      </S.Nav>
    </S.NavTab>
  )
}

export default NavTab
