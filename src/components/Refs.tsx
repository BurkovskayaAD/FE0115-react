import { useRef } from "react";

function Refs() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus()
    }

    const handleClickk = () => {
        inputRef.current?.blur()
    }

    return ( <>
        <input ref={inputRef}></input>
        <button onClick={handleClick}>Focus</button>
        <button onClick={handleClickk}>Blur</button>
    </> );
}

export default Refs;