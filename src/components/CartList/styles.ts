import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  
  & > button {
    width: 100%;
    max-width: 450px;
    padding: 5px;
    margin-top: 1rem;
    background: ${({ theme }) => theme.primaryBlack};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
