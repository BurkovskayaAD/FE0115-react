// import { useContext } from 'react';
// import './Context.css';
// import { myContext } from '../../providers/ExampleContext';

// function Context() {

//     const [contexttt, setContexttt] = useContext(myContext);
//     console.log(contexttt)

//     const handleClick = () => {
//         setContexttt(contexttt === 'light' ? "dark" : "light")
//     }

//     return ( 
//         <div onClick={handleClick} className={`context-${contexttt}`}>
//             <p className={`context-text-${contexttt}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, ipsum repellendus possimus nobis maiores perspiciatis rerum vel inventore non at et laboriosam odio fugiat, voluptatibus atque quo suscipit! Iusto, ea.</p>
//         </div>
//      );
// }

// export default Context;



import { useContext } from 'react';
import './Context.css';
import { myContext } from '../../providers/ExampleContext';

function Context() {

    const [contexttt, setContexttt] = useContext(myContext);
    // console.log(contexttt)
    return ( 
        <div className={`context-${contexttt}`}>
            <p className={`context-text-${contexttt}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, ipsum repellendus possimus nobis maiores perspiciatis rerum vel inventore non at et laboriosam odio fugiat, voluptatibus atque quo suscipit! Iusto, ea.</p>
        </div>
     );
}

export default Context;