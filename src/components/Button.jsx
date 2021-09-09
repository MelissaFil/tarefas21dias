import React from "react";

const Button = ({children, onClick})=>{
    return (
        <button onClick={onClick} className="btn text-light mx-1"> 
            {children} 
        </button>
        )
}

export default Button