import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "../images/images";

const images = {
    dirt : dirtImg,
    grass : grassImg,
    glass :glassImg,
    wood : woodImg,
    log : logImg,
}

export const TextureSelector = () => {
    const [ visible, setVisible ] = useState(false);
    const [activeTexture,setTexture] = useStore((state)=>[state.texture, state.setTexture]);
    const { 
        grass ,
        wood ,
        log ,
        glass ,
        dirt 
    } = useKeyboard()

   

    useEffect(()=>{
        const textures = {
            grass ,
            wood ,
            log ,
            glass ,
            dirt 
        }
        const pressedTexture =Object.entries(textures).find(([k,v])=>v);
        if(pressedTexture){
            setTexture(pressedTexture[0])
        }
    },[dirt,glass,grass,wood,log])

    useEffect(()=>{
        const visibilityTimeout = setTimeout(()=>{
            setVisible(false)
        }, 2000);
        setVisible(true);
        return ()=>{
            clearTimeout(visibilityTimeout);
        }
    },[activeTexture]);

    return visible && (
        <div className = 'absolute centered texture-selector'>{
            Object.entries(images).map(([k, src])=><img src={src} key={k} alt={k} className={`${k === activeTexture?'active':''}`}/>)
        }</div>
    )
}