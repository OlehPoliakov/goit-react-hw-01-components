import styled from '@emotion/styled';

const StyleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  margin: ${p => p.theme.spacing(0)};
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(8)};
  padding-right: ${p => p.theme.spacing(8)};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.disabled ? p.theme.colors.white : p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.black};
  }
`;

export const Button = ({
  icon = 'none',
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyleButton type={type} disabled={disabled}>
      {icon}
      {children}
    </StyleButton>
  );
};



// import { Button } from "../details/button";

// import { HiBan, HiAdjustments, HiAtSymbol } from 'react-icons/hi';

        {
          /* <Button icon={<HiBan />}>Search</Button>
        <Button icon={<HiAdjustments />}>qwe</Button>
        <Button icon={<HiAtSymbol />}>asd</Button> */
        }