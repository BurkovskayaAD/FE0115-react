import Dumb from './Dumb';

function Smart() {

    // function getData(value: any) {
    //     console.log(value)
    // }

    function getData() {
        console.log("sadasdas")
    }
    
    return ( 
        <>
            <Dumb onMyClick={getData} text="Click me"></Dumb>
        </>
     );
}

export default Smart;