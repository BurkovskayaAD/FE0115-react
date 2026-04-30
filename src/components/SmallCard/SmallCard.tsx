import './SmallCard.css';
import Shrek from  '../../assets/shrek.jpg'

function SmallCard() {
    return ( 
        <div className='small-card'>
            <div className='small-card-top'>
                <div className='small-card-top-left'>
                                    <div className='small-card-top-left__title'>qui est esse</div>
                                    <div className='small-card-top-left__body'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla</div>
                                </div>
            <div className='small-card-top-right'>
                                    <div className='small-card-top-right-image'>
                                        <img src={Shrek} alt="Img" />
                                    </div>
                                </div>
                            </div>
                            <div className='small-card-bottom'>
                                <div className='small-card-bottom-left'></div>
                                <div className='small-card-bottom-right'></div>
                            </div>
                        </div>
     );
}

export default SmallCard;