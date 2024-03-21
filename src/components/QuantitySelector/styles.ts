import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IncrementButton = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 0 12px;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const DecrementButton = styled(IncrementButton)``;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 5px;
`;
