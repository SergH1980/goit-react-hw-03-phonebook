import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const FilterLabel = styled.label`
  margin-bottom: 12px;
  font-weight: 600;
`;

export const FilterInput = styled.input`
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 4px;
`;
