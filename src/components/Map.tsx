import { films } from "../data";

function Map() {
    return ( 
        <>
        {films.map((item) => <h1 key={item.title}>{item.title} - {item.genre}</h1>)}
        </>
     );
}

export default Map;