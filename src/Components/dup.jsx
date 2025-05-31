import { useEffect,useState} from "react";

const dup = () =>{
    const[screen,setScreen] = useState({
        width:window.innerWidth,
        height:window.innerWidth,
    });

    const updateScreen = () =>{
        setScreen({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    useEffect (() =>{
        window.addEventListener('resize',updateScreen);
        return() =>{
            
        }
    })
}