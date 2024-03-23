import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  min-height: 50vh;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`

export const ImgWrapper = styled.div`
  height: 440px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 1.5rem;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;

  padding: 0.75rem;

  object-fit: cover;
  transition: 0.5s all;
  border-radius: 1.5rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const InfoWrapperCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 1rem;
`

export const Name = styled.h2`
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
  padding-top: 2rem;
  color: ${({ theme }) => theme.primaryBlack};
`

export const ShortDescription = styled.div`
  padding: 0.5rem 0;
  font-size: calc(1.2rem + 0.1vw);
`
export const LongDescription = styled.div`
  font-size: calc(1rem + 0.1vw);
  margin-top: 1rem;
  padding-bottom: 1rem;
  /* padding: 1rem; */

  @media screen and (max-width: 768px) {
    max-width: 480px;
    margin: 0 auto;
  }
`

export const AddToCartForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`

export const InputField = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  max-width: 60px;
  font-size: 1rem;
  text-align: center;
  background-color: #f2f2f2;
  color: #43454b;
  border: none;
  font-weight: 400;

  &[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }
`
export const AddToCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;
  text-shadow: none;

  transition: all 0.2s ease-in-out;
  background: #333333;
  border-color: #333333;
  color: #fff;
  width: calc(120px + 0.2vw);
  height: 41px;
  //display: inline-block;
  transition: all 0.2s ease-in-out;
`

export const Category = styled.p`
  font-size: calc(0.8rem + 0.1vw);
  margin-top: 2rem;
  letter-spacing: 1px;
`
export const CategorySpan = styled.span`
  text-decoration: underline;
`

export const VariationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;

  & > label {
    color: ${({ theme }) => theme.primaryBlack};
    font-weight: 600;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  margin: 10px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.primaryBlack}`};
  padding: 5px;
  border-radius: 5px;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.primaryBlack};
`;

export const Price = styled.b`
  margin-left: 0.5rem; 
`;