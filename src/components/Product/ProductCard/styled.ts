import styled from 'styled-components'

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const RegularPrice = styled.p<{ isOnSale: boolean }>`
  color: ${({ theme }) => theme.primaryText};
  text-decoration: ${({ isOnSale }) => (isOnSale ? `line-through` : `none`)};
  font-weight: bolder;
  font-size: ${({ isOnSale }) => (isOnSale ? `calc(0.8rem +  0.1vw)` : `calc(1rem +  0.1vw)`)};
  margin: 0 0.25rem;
  opacity: ${({ isOnSale }) => (isOnSale ? `0.5` : `0.9`)};
`
export const SalePrice = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-weight: bold;
  font-size: calc(1rem + 0.1vw);
  margin: 0 0.25rem;
  opacity: 0.9;
`

export const Name = styled.p`
  font-size: calc(1.2rem + 0.2vw);
  padding-bottom: 0.25rem;
  align-self: auto;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in-out;
  color: ${({ theme }) => theme.primaryBlack};
  margin: 0 1rem;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s, visibility 0.25s ease-in;
`
export const ImgWrapper = styled.div`
  height: 400px;
  width: 100%;
  overflow: hidden;
  transform-origin: 0 0;
  border-radius: 1rem;

  &:hover {
    ${Img} {
      transform: scale(1.1);
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;

    ${Name} {
      color: ${({ theme }) => theme.primaryPurple};
    }
  }
`
