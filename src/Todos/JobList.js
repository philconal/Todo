import JobItem from "./JobItem";
import React, {useReducer} from "react";
import {initialize, reducer} from "./store/reducer";
import {deleteJob} from "./store/actions";

function  JobList({jobs}) {
    const [state, dispatch] = useReducer(reducer, initialize);
    const handleDeleteJob = (value) => {
       dispatch(deleteJob(value));
        console.log("Delete Value: ", value)
        console.log("Jobs: ", state.jobs)

    }
    return  (
        <>
            {jobs.map((item , index)=> {
                return (
                    <JobItem key = {index} job ={item} onDeleteJob={() => handleDeleteJob(item)} />
                )
            })}

        </>
    )

}
export default  JobList;
