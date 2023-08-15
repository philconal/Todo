import JobItem from "./JobItem";
import React from "react";

function  JobList({jobs,handleDeleteJob}) {

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
