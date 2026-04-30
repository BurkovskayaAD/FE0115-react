// import { useEffect, useState } from "react";

// function Effect() {

//     let [data, setData] = useState(false);
//     let [data1, setData1] = useState(false);


//     useEffect(() => {
//         console.log("aaaa")
//     }, [data, data1])

//     return (    
//         <>
//             <button onClick={() => setData(!data)}>{String(data)}</button>
//             <button onClick={() => setData1(!data1)}>{String(data1)}</button>

//         </> 
//     );
// }

// export default Effect;

//////////////////////

// import { useEffect, useState } from "react";

// function Effect() {

//     let [isVisible, setIsVisible] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() =>{
//             setIsVisible(false)
//         }, 5000)

//         return () => clearTimeout(timer)
//     }, [])

//     return (    
//         <>
//             {isVisible ? <h1>Hello</h1> : null}
//         </> 
//     );
// }

// export default Effect;


///////////////////////////
import { useEffect, useState } from "react";

type TTodo = {
    id: number,
    userId: number,
    completed: boolean,
    title: string
}

function Effect() {

    let [todos, setTodos] = useState<null | TTodo[]>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))

            localStorage.setItem("todo", JSON.stringify(todos))
    }, [todos])

    return (    
        <>
        {todos?.map((item) => <div key={item.id}>{item.title}</div>)}
        </> 
    );
}

export default Effect;