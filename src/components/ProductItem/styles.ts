import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;   
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.primaryBlack};
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: #e63946;
  border: none;
  cursor: pointer;
  margin-top: auto;
  text-align: right;

  & > svg {
    margin-right: 5px;
  }
`;
