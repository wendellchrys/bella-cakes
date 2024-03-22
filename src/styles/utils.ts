import styled from 'styled-components'

export const BasicContainer = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`

export const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    flex-basis: 20%;
    min-width: 15em;
    max-width: 25em;
    flex-grow: 1;
  }
`

export const BasicGrid = styled.div<{ lg: number; md: number; sm: number; xs: number }>`
  display: grid;
  grid-template-columns: ${({ lg }) => `repeat(${lg}, 1fr)`};
  width: 100%;
  height: 80%;

  @media screen and (max-width: 992px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ sm }) => `repeat(${sm}, 1fr)`};
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: ${({ xs }) => `repeat(${xs}, 1fr)`};
  }
`

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.primaryBlack};
`

export const MainButton = styled.button``

export const Subtitle = styled.h2`
  font-size: calc(1.5rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
  padding: 1rem;
  margin: 1rem;
`

export const Loader = styled.div`
  
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3333;
  width: 1.5em;
  height: 1.5em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`
