import styled from 'styled-components';

export const StyledButton = styled.button<{ colorBG?: string }>`
  cursor: pointer;
  color: white;
  background: ${props => props.colorBG || props.theme.colors.mainPurple};
  padding: 15px 25px;
  height: 48px;
  border: none;
  border-radius: 24px;

  @media (any-hover: hover) {
    &:hover{
      background: ${props => props.colorBG || props.theme.colors.mainPurpleHover};
    }
  }
`