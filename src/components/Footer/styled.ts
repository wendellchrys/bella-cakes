import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'

export const Container = styled.section`
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #f0f0f0;
`
export const Copyright = styled.p`
  font-size: calc(1rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
`

export const MobileCartButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 0.5rem;
  bottom: 0;
  background: ${({ theme }) => theme.primaryBlack};
  color: #fff;
`

export const CartIconWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.lightWhiteBg};
`

export const CartIcon = styled(RiShoppingCart2Fill)`
  font-size: 2rem;
  cursor: pointer;
  margin: 0 0.5rem;
`


