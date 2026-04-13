import './Button.css';

type TButton = {
    content: string,
    functionClick: () => void,
    isDisable: boolean
}

// function Button(props: TButton) {

//     const buttonClick = function(): void {
//         alert("Hi");
//     }

//     return ( 
//         <>
//             <button onClick={buttonClick} className='my-button'>{props.content}</button>
//         </>
//      );
// }


function Button({content, functionClick, isDisable}: TButton) {

    // const buttonClick = function(): void {
    //     alert("Hi");
    // }

    return ( 
        <>
            <button disabled={isDisable} onClick={() => functionClick()} className='my-button'>{content}</button>
        </>
     );
}


export default Button;