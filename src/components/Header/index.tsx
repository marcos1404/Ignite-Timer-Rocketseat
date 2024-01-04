import { HeaderContainer } from './styles'
import { Scroll, Timer } from '@phosphor-icons/react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
