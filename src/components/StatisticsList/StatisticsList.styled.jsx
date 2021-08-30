import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  background-color: ${props => `${props.theme.colors.blue}`};
  width: calc(100% / 5);
  border: 1px solid ${props => `${props.theme.colors.greyBorder}`};
  border-radius: 0.25rem;
`;
export const Label = styled.span`
  color: ${props => `${props.theme.colors.yellow}`};
`;
export const Percentage = styled.span`
  font-weight: bold;

  color: ${props => `${props.theme.colors.black}`};
`;
