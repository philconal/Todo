import JobItem from "./JobItem";

function JobList() {
  const jobs = [1, 2, 2, 3];
  return (
    <>
      <h1>Hello Conal</h1>
      {jobs.map((item, index) => {
        return <JobItem key={index}></JobItem>;
      })}
    </>
  );
}
export default JobList;
