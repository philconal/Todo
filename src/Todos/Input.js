function Input() {
    const handleChange = (e) => {
            console.log("input Change")
        }
    ;
    return (
        <>
            <input type="text" placeholder={"Enter Job Here ..."} value={""} onChange={handleChange}/>
        </>
    )
}

export default Input;