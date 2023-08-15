import React from "react";

function Input({state,inputChange,inputRef}) {

    return (
        <>
            <input ref={inputRef} value={state.job} type="text" placeholder={"Enter Job Here ..."} onChange={inputChange}/>
        </>
    )
}

export default Input;
