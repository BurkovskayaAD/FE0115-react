import useToggle from "../hooks/useToggle";

function Toggle() {

    const [text, setText] = useToggle();

    return ( <>
        <button onClick={setText}>{`${text}`}</button>
    </> );
}

export default Toggle;