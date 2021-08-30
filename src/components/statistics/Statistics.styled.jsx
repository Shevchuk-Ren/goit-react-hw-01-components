import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  width: 320px;
  padding-top: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => `${props.theme.colors.granat}`};
  border-radius: 0.25rem;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 5px;
  color: ${props => `${props.theme.colors.grey}`};
`;
