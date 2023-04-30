import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  width: 400px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 20px 30px;
`;

export const EmptyList = styled.div`
  font-size: 40px;
  text-align: center;
  color: red;
  font-weight: 600;
  text-shadow: 0px 0px 3px rgba(81, 67, 21, 0.8),
    0px 4px 7px rgba(81, 67, 21, 0.8);
`;
