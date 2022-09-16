import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  border: ${p => `1px solid ${p.theme.colors.border}`};
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
`;
export const Thead = styled.thead`
  padding: ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Tr = styled.tr`
  text-align: center;
  height: 45px;
  :nth-of-type(2n) {
    background-color: ${p => p.theme.colors.background};
  }
`;
export const Th = styled.th`
  padding: ${p => p.theme.spacing(5)};
  
`;
export const Tbody = styled.tbody`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  border: ${p => `5px solid ${p.theme.colors.border}`};
`;
export const Td = styled.td`
  padding: ${p => p.theme.spacing(5)};
  
`;