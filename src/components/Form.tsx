import { useState } from "react";

function Form() {

    let [name, setName] = useState("");

    function handleChange(event: any): void {
        setName(event.target.value)
    }

    return ( 
        <>
            <label htmlFor="name">Enter name:</label>
            <input type="text"  id="name" value={name} onChange={handleChange}/>
            <div>{name}</div>
        </>
     );
}

export default Form;