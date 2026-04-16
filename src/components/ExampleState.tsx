import { useState } from "react";

function ExampleState() {
    // let isChecked = useState();
    // console.log(isChecked)

    let [isChecked, setIsChecked] = useState("text");
    let [count, setCount] = useState(0);

    function clickButton(): void {
        setIsChecked("aaaaaa")
    }

    return ( 
        <>
        <div>{isChecked}</div>
        <button type="button" onClick={clickButton}></button>
        <button onClick={() => setCount(++count)}>{count}</button>
        </>
     );
}

export default ExampleState;