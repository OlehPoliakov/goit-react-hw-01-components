import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  background-color: ${p => p.theme.colors.background};
  border: ${p => `1px solid ${p.theme.colors.border}`};
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  max-width: 300px;
`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: ${p => p.theme.spacing(5)};
  color: ${p => p.theme.colors.secondary};
`;
export const StatList = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  padding: ${p => p.theme.spacing(5)};
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.spacing(2)};
`;
export const Percentage = styled.span``;
