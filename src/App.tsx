import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';

function App() {
  return (
    <>
    <div>Outside Canvas</div>
    <Canvas>
      <Sky sunPosition={[100,100,20]}/>
      <ambientLight intensity={0.5}/>
      <FPV />
      <Physics>
        <Player />
        <Cubes />
        <Ground />
      </Physics>
    </Canvas>
    <div className='absolute centered cursor'>+</div>
  </>
  )
}

export default App
