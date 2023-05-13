import styled from 'styled-components';

export const SubtasksContainer = styled.div`
  width: 100%;
  ${props => props.theme.fonts.body_M};
  color: ${props => props.theme.colors.mediumGrey};
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  p{
    margin-bottom: 8px;
  }
`;

