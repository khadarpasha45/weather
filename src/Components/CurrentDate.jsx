import React from "react";

const CurrentDate = () => {
    const today = new Date().toString();
    return(
        <div>
            <h3>Today is : {today}</h3>
        </div>
    )
}

export default CurrentDate;