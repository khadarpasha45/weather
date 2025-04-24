import { useState } from "react";
const Click = () => {

    const [number,setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1)
    }

    return(
        <div>
            {/* <h1>Click</h1> */}
            <div>
                <h1>{number}</h1>
                <button onClick={number}>Increment</button>
                <button>Decrement</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Click;