import React from "react";

function Age({age}){
    return age < 18 ? <p>You are very young!</p> : <p>Your age is {age}</p>
}
export default Age;