import { Link, Outlet } from "react-router-dom";

let data = [
    {
        id: 1,
        text: "aaaa"
    },
{
        id: 2,
        text: "bbb"
    },
{
        id: 3,
        text: "ccc"
    },]

function AllPostsPage() {
    return ( 
        <>
        
        <div>ALL POSTS</div>
        {data.map(item => <Link to={`${item.id}`} key={item.id}>{item.text}</Link>)}
        {/* <Link to="bigcart">OPEN</Link>
        <Outlet/> */}
        
        </>
        
     );
}

export default AllPostsPage;