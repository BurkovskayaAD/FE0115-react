import { useState } from 'react';
import  './Input.css'

type TInput = {
    inputType: string,
    inputLabel: string,
    inputPlaceholder: string,
    isDisable: boolean
}

function Input({inputType, inputLabel, inputPlaceholder, isDisable}: TInput) {

    const [inputData, setInputData] = useState("");

    function handleChange(event: any): void {
        setInputData(event.target.value)
    }

    return ( 
        <div className='input-element'>
            <label className='label' htmlFor={inputLabel}>{inputLabel}</label>
            <input type={inputType} 
                id={inputLabel} 
                placeholder={inputPlaceholder} 
                disabled={isDisable}
                value={inputData}
                onChange={handleChange}
                className='input' />
        </div>
     );
}

export default Input;