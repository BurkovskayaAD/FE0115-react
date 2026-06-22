import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, setFalse } from "../store/slice";

function ComponentForRedux() {

    let dataaaa = useSelector((data: any) => data.mySlice)
    let dispatch = useDispatch();

    function handlerClick(students: any) {
        dispatch(addStudent({id: 3, name: "Hanna"}))
    }

    function handlerClickk() {
        dispatch(setFalse())
    }

    return ( 
        <>
        {dataaaa.students.map((item: any) => <div key={item.id}>{item.name}</div>)}
        <button onClick={handlerClick}>Add</button>
        <button onClick={handlerClickk}>{`${dataaaa.check}`}</button>
        </>
     );
}

export default ComponentForRedux;