import styled from 'styled-components';

export const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;
`;

export const ContactItemName = styled.p`
  font-weight: 600;
`;

export const ContactItemNumber = styled.p`
  color: #1e1e99;
`;

export const ContactItemButton = styled.button`
  padding: 5px 10px;

  border: none;
  border-radius: 8px;

  background-color: #1f86cf;
  color: white;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition-duration: 300ms;
  transition-property: background-color, color;
  cursor: pointer;

  :hover {
    background-color: #544a57;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  :active {
    color: #d8cb54;
  }
`;
