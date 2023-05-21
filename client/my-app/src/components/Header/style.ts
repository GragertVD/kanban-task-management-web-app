import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 20px 30px 28px 24px;
  border-bottom: 1px solid ${props => props.theme.colors.linesLight};
  & div{
    display: flex;
    align-items: center;
    gap: 25px;
    /* height: 100%; */

    img{
      flex: 0 1 45px;
      /* width: 45px; */
      padding: 0 20px;
      cursor: pointer;
    }
  }
`;