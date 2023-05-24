import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 20px 30px 28px 24px;
  border-bottom: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
  transition: background-color 1s, color 1s;

  & div{
    display: flex;
    align-items: center;
    gap: 25px;
    /* height: 100%; */
  }

  h1{
    ${props => props.theme.fonts.heading_XL}
  }

  svg{
    cursor: pointer;
    margin-right: 120px;
  }


  ${props => props.theme.beforeTablet}{
    height: 80px;
    padding: 16px 25px;

    h1{
      font-size: 20px;
      line-height: 25px;
    }

    svg{
      transform: scale(0.85);
    }

    svg{
      margin-right: 40px;
    }
  }


  ${props => props.theme.beforeMobileM}{
    height: 64px;
    padding: 16px;
    h1{
      font-size: 18px;
      line-height: 23px;
    }
  }
`;