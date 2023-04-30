import styled from 'styled-components';

import {
  Form as FormStyle,
  Field as FieldStyle,
  ErrorMessage as ErrorMessageStyle,
} from 'formik';

export const Form = styled(FormStyle)`
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 20px 30px;
`;

export const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Field = styled(FieldStyle)`
  width: 250px;
  margin-bottom: 2px;
`;

export const SubmitButton = styled.button`
  max-width: 120px;
  margin-top: 15px;
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
    background-color: #d7b7e4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  :active {
    color: black;
  }
`;

export const ErrorMessage = styled(ErrorMessageStyle)`
  color: red;
`;
