import Input from "./Input";
import Button from "./Button";
import JobList from './JobList'
import React, {useContext, useReducer, useRef} from "react";
import {initialize, reducer} from "./store/reducer";
import {addJob, setJob} from "./store/actions";
import {TodoContext} from "../App";

function MyToDo() {
    const inputRef = useRef(null);
    const [state, dispatch] = useContext(TodoContext)
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
