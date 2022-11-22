import styled from 'styled-components';

export const Container = styled.div<{ size: number, left: number, top: number, sidePos: number }>`
   width: ${p => p.size}px;
   height: ${p => p.size}px;
   position: absolute;
   left: ${p => p.left}px;
   top: ${p => p.top}px;
   
   background-image: url('/assets/char.png');
   background-position: 0px ${p => p.sidePos}px;
`