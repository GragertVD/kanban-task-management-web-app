import styled from 'styled-components';

export const TaskCardContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  padding: 23px 16px;

  ${props => props.theme.fonts.heading_M}

  transition: all 0.3s;

  &:hover{
    transform: scale(1.03);
  }

`;
