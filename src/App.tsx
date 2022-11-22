import { useEffect } from 'react';

import { useCharacter } from './hooks/useCharacter';
import { Character } from './components/Character';

import * as C from './App.style'

export const App = () => {
   const char = useCharacter();

   useEffect(() => {
      window.addEventListener('keydown', handleKeyDown)
   }, [])

   const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
         case 'KeyA':
         case 'ArrowLeft':
            char.moveLeft()
            break;
         case 'KeyW':
         case 'ArrowUp':
            char.moveUp()
            break;
         case 'KeyD':
         case 'ArrowRight':
            char.moveRight()
            break;
         case 'KeyS':
         case 'ArrowDown':
            char.moveDown()
            break;
      }
   }

   return (
      <C.Container>
         <C.Map>
            <Character x={char.x} y={char.y} side={char.side} />
         </C.Map>
      </C.Container>
   );
}