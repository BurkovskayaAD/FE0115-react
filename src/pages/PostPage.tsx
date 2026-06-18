import { useNavigate, useParams } from "react-router-dom";

function PostPage() {

    let id = useParams();
    console.log(id);

    // let nav = useNavigate();
    // nav("/main")

    return ( 
        <>
            <div>POST</div>
            <div>{id.id}</div>
        </>
     );
}

export default PostPage;