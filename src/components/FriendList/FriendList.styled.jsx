import styled from '@emotion/styled';


export const FriendList = styled.ul`
  padding: ${p => p.theme.spacing(5)};
  width: 250px;
`;
export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(1)};
  border: ${p => `1px solid ${p.theme.colors.border}`};
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-left: ${p => p.theme.spacing(5)};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.children ? p.theme.colors.red : p.theme.colors.green};
`;
export const Avatar = styled.img`
  margin-left: ${p => p.theme.spacing(5)};
  margin-right: ${p => p.theme.spacing(5)};
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;