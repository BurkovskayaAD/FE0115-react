import './PostsList.css';
import BigCard from '../BigCard/BigCard';
import MediumCard from '../MediumCard/MediumCard';
import SmallCard from '../SmallCard/SmallCard';



function PostsList() {
    return ( 
        <div className='postslist'>
            <div className='postslist-left'>
                <BigCard></BigCard>
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
            </div>
            <div className='postslist-righ'>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
            </div>

        </div>
     );
}

export default PostsList;