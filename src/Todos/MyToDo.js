import Input from "./Input";
import Button from "./Button";
import JobList from './JobList'
import React, {useReducer, useRef} from "react";
import {initialize, reducer} from "./store/reducer";
import {addJob, setJob} from "./store/actions";

function MyToDo() {
    const inputRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialize)
    const handleInputChange = (e) => {
        dispatch(setJob(e.target.value));
    };
    const handleAddJob = () => {
        dispatch(addJob(state.job));
        dispatch(setJob(""));
        inputRef.current?.focus();
    };
    return (
        <>
            <Input inputRef ={inputRef} state={state} inputChange={handleInputChange}/>
            <Button onAddJob={handleAddJob}> </Button>
            <JobList jobs={state.jobs}> </JobList>
        </>
    )
}

export default MyToDo
