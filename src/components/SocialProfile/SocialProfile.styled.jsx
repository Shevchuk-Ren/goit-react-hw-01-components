import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => `${props.theme.colors.granat}`};
  background-clip: border-box;
  border-radius: 0.25rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: ${props => `${props.theme.colors.grey}`};
  margin-bottom: 10px;
`;
export const Location = styled.p`
  color: ${props => `${props.theme.colors.grey}`};
  margin-bottom: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  background-color: ${props => `${props.theme.colors.blue}`};
  width: calc(100% / 3);
  border: 1px solid ${props => `${props.theme.colors.greyBorder}`};
  border-radius: 0.25rem;
`;
export const Label = styled.span`
  color: ${props => `${props.theme.colors.yellow}`};
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: ${props => `${props.theme.colors.black}`};
`;
