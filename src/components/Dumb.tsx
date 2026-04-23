function Dumb({text, onMyClick}: {text: string, onMyClick: () => void}) {

    function handleClick(): void {
        // {text, onMyClick}: {text: string, onMyClick:(value: any) => void}
        // onMyClick("bbb")

        onMyClick();
    }

    return ( 
        <>
        <div onClick={handleClick}>{text}</div>
        </>
     );
}

export default Dumb;