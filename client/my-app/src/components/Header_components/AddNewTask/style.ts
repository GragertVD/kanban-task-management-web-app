import styled from 'styled-components';

export const NewTaskContainerForm = styled.form`
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

export const TitleNewTask = styled.h3`
  width: 100%;
  ${props => props.theme.fonts.heading_L};
`;

export const InputTitleContainer = styled.div`
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
    ${props => props.theme.fonts.body_L};
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

export const InputDescriptionContainer = styled.div`
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
  
  textarea{
    resize: none;
    width: 100%;
    height: 112px;
    padding: 8px 16px;
    ${props => props.theme.fonts.body_L};
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


export const Background = styled.div`
  /* background-color: black; */
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  transition: all 0.35s;
  background-color: rgba(0, 0, 0,  0.35);
  pointer-events: all;

`;
