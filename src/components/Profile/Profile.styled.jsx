import styled from '@emotion/styled';

export const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.div`
  border: ${p => `1px solid ${p.theme.colors.border}`};
  border-radius: ${p => p.theme.spacing(2.5)};
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.black};
`;

export const Avatar = styled.img`
  border: ${p => `2px solid ${p.theme.colors.border}`};
  border-radius: ${p => p.theme.radii.round};
  margin-top: ${p => p.theme.spacing(15)};
  margin-bottom: ${p => p.theme.spacing(15)};
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-bottom: ${p => p.theme.spacing(5)};
  color: ${p => p.theme.colors.secondary};
`;

export const Location = styled.div`
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-bottom: ${p => p.theme.spacing(15)};
  color: ${p => p.theme.colors.secondary};
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${p => `1px solid ${p.theme.colors.border}`};
  background-color: ${p => p.theme.colors.background};
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.spacing(8)};
  color: ${p => p.theme.colors.secondary};
  border-right: ${p => `1px solid ${p.theme.colors.border}`};

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.xs}px;
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;
