import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 5px;
  color: ${props => `${props.theme.colors.grey}`};
`;

export const Transaction = styled.table`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.25rem;
`;

export const Topic = styled.th`
  padding: 8px;
  color: ${props => `${props.theme.colors.grey}`};
  background-color: ${props => `${props.theme.colors.granat}`};
  border: 1px solid ${props => `${props.theme.colors.black}`};
  border-radius: 0.25rem;
`;
export const Tbody = styled.tbody`
  background-color: ${props => `${props.theme.colors.blue}`};
`;

export const Item = styled.tr`
  border: 1px solid ${props => `${props.theme.colors.black}`};
`;
export const Cell = styled.td`
  padding: 8px;
  text-align: center;
  border-radius: 0.25rem;
`;
