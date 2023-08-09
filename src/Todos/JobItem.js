
function JobItem({job,onDeleteJob}) {
    return  (
        <>
        <p>{job}  <span onClick={onDeleteJob}>X</span></p>
        </>
    )

}
export  default  JobItem
