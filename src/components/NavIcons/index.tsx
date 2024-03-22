import React, { useContext, useMemo } from 'react'
import * as NavIconStyles from './styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

interface NavigationIconsProps {
  scrollNav: boolean
  isMobile: boolean
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ scrollNav, isMobile }) => {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <NavIconStyles.IconHolder scrollNav={scrollNav} isMobile={isMobile}>

      <Link href="/carrinho" passHref>
        <NavIconStyles.CartIconWrapper>
          Carrinho <NavIconStyles.CartIcon />
        </NavIconStyles.CartIconWrapper>
      </Link>

      {/* <NavIconStyles.AccIcon onClick={() => router.push(session ? '/account' : '/login')} /> */}
    </NavIconStyles.IconHolder>
  )
}

export default React.memo(NavigationIcons)
