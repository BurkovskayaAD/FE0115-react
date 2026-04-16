function ConditionalState() {

    let isShow = false;
    return ( <>
        {isShow ? <h1>I am true</h1> : <h1>I am false</h1>}
        {isShow && <h1>AAAAAAAAAAAAaa</h1>}
    </> );
}

export default ConditionalState;