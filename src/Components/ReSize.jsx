import { useState,useEffect } from "react";

const ReSize = () =>{
    const[screen,setScreen] = useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });

    const updateScreenSize = () =>{
        setScreen({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    useEffect (() =>{
        window.addEventListener('resize',updateScreenSize);
        return() =>{
            window.removeEventListener('resize',updateScreenSize);
        }
    },[])
    return (
        <div>
            <h1>ScreanSizeExample</h1>
            <p>Resize the window to see the screamSize</p>
            <p style={{color:"Red"}}>height:{screen.height}px</p>
        </div>
    )
}

export default ReSize;