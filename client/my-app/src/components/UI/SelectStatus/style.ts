import styled from 'styled-components';
import icon_check from "../../../img/icon-check.svg";

export const SelectStatusContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  p{
    ${props => props.theme.fonts.body_M};
    color: ${props => props.theme.colors.mediumGrey};
    margin-bottom: 8px;
  }

`;

