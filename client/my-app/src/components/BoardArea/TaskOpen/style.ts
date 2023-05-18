import styled from 'styled-components';

export const TaskOpenContainer = styled.div`
  width: 480px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  /* transition: all 0.3s; */
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    ${props => props.theme.fonts.heading_L};
    margin-right: 24px;
  }
  img{
    flex: 0 1 45px;
    /* width: 45px; */
    padding: 0 20px;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  width: 100%;
  ${props => props.theme.fonts.body_L};
  color: ${props => props.theme.colors.mediumGrey};
`;
