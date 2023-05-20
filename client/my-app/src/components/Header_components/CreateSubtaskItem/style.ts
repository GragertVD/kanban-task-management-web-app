import styled from "styled-components";

export const SubtaskItemContainer = styled.div`
  width: 100%;
  p{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: ${props => props.theme.colors.mediumGrey};
    margin-bottom: 8px;
  }
  
  input{
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    color: rgba(00,01,12, 0.25);
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    color: ${props => props.theme.colors.black};
    &::placeholder{
      color: rgba(00,01,12, 0.25);
    }
    &:focus{
      outline: none;
      border: 1px solid ${props => props.theme.colors.mainPurple};
    }
  }
`;