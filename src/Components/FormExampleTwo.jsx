import React,{ useState } from "react";

function FormExampleTwo() {
    const[inputs,setInputs] = useState([""]);

    const handleAddInput = () =>{
        setInputs([...inputs,""]);
    }

    const handleInputChange = (index,event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    }

    const handleShowValues = () =>{
        alert("Entered values:\n" + inputs.map((val,idx) => `Input ${idx + 1}:${val}`).join("\n"));
    }

    return(
        <div style={{padding:'30px',fontFamily:'Arial'}}>
            <h2>Custom Dynamic Input Component</h2>

            {inputs.map((value,index) => (
                <input
                key={index}
                type="text"
                placeholder={`Enter value ${index+1}`}
                value={value}
                onChange={(e) => handleInputChange(index,e)}
                style={{
                    display:'block',
                    marginBottom:'10px',
                    padding:'8px',
                    width:'300px',
                    fontsize:'16px'
                }}
                />
            ))}

            <button onClick={handleAddInput} style={{marginRight:'10px',padding:'10px'}}>
                Add Input
            </button>

            <button onClick={handleShowValues} style={{marginRight:'10px',padding:'10px'}}>
                Show Values
            </button>
        </div>
    )
}

export default FormExampleTwo;