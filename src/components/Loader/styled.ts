import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.primaryBlack};
`
