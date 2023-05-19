import styled from 'styled-components';

// export const Background = styled.div<{ openDropMenu: boolean }>`
//   position: fixed;
//   z-index: 10;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
  
//   transition: all 0.35s;
//   background-color: transparent;
//   pointer-events: ${props => props.openDropMenu ? 'all' : 'none'};

// `;

export const DropMenuConteiner = styled.div`
  position: absolute;
  z-index: 11;
  width: 190px;

  transition: all 0.35s;
  transform: scale(${props => 1? 1 : 0});
  pointer-events: ${props => 1 ? 'all' : 'none'};

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  padding: 16px;
`

export const DropMenuList = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 10px;

  li{
    ${props => props.theme.fonts.body_L}
    color: ${props => props.theme.colors.mediumGrey};
    cursor: pointer;
    width: 100%;

    &:hover{
      background-color: ${props => props.theme.colors.lightGrey};
    }
  }

  li:last-child{
    color: ${props => props.theme.colors.red};
  }

`
