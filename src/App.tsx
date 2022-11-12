import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';

function App() {
  return (
    <>
    <div>Outside Canvas</div>
    <Canvas>
      <Sky sunPosition={[100,100,20]}/>
      <ambientLight intensity={0.5}/>
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  </>
  )
}

export default App
