import styled from 'styled-components'

export const Form = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`

export const InputField = styled.input`
  padding: 0.4em;
  margin-right: 1rem;
  max-width: 60px;
  font-size: 1rem;
  text-align: center;
  background-color: #f2f2f2;
  color: #43454b;
  border: none;
  font-weight: 400;
  border-radius: 0.4rem;
  border: ${({ theme }) => `1px solid ${theme.primaryBlack}`};

  &[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }
`

export const Btn = styled.button`
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
  background: ${({ theme }) => theme.primaryBlack};
  border: none;
  color: #fff;
  width: calc(150px + 0.2vw);
  border-radius: 5px;
  height: 40px;
  //display: inline-block;
  transition: all 0.2s ease-in-out;
`

export const Text = styled.p`
  font-weight: 600;
  font-size: calc(0.75rem + 0.1vw);
`
