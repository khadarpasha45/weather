import { useState } from "react";

const StateFull = () =>{
    const[count, setCount] = useState(0);
    return (
        <div>
            <center>
                <h1>
                    Count:{count}
                </h1>
                <button onClick={() => setCount(count+1)}Increment></button>
            </center>
        </div>
    )
}