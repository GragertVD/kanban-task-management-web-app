import styled from 'styled-components';


export const AddColumnContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    ${props => props.theme.fonts.heading_XL};
    color: ${props => props.theme.colors.mediumGrey}; 
    width: 100%;
    text-align: center;
    padding: 100% 0;
    cursor: pointer;
  }

`;