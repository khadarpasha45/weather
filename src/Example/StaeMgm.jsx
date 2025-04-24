import { useState } from "react";

const staeMgm = () =>{
    const [city,setCity] = useState("Hyderabad");
    return(
        <div>{city}</div>
    )
}

export default staeMgm;