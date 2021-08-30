import styled from '@emotion/styled';

export const FriendWrapper = styled.div`
  width: 320px;
  padding-top: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-color: ${props => `${props.theme.colors.granat}`};
  border-radius: 0.25rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 5px;
  color: ${props => `${props.theme.colors.grey}`};
`;

export const RosterFriends = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  text-align: center;
  padding: 10px;
  width: calc(100% / 2);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => `${props.theme.colors.blue}`};
  border: 1px solid ${props => `${props.theme.colors.greyBorder}`};
  border-radius: 0.25rem;
`;
export const Status = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.red}`;
  }};
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  color: ${props => `${props.theme.colors.black}`};
`;
