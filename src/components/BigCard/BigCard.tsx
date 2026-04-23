import './BigCard.css';
import Shrek from  '../../assets/shrek.jpg'

function DigCard() {
    return ( 
        <div className='big-card'>
            <div className='big-card-top'>
                <div className='big-card-top-left'>
                    <div className='big-card-top-left__title'>qui est esse</div>
                    <div className='big-card-top-left__body'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla</div>
                </div>
                <div className='big-card-top-right'>
                    <div className='big-card-top-right-image'>
                        <img src={Shrek} alt="Img" />
                    </div>
                </div>
            </div>
            <div className='big-card-bottom'>
                <div className='big-card-bottom-left'></div>
                <div className='big-card-bottom-right'></div>
            </div>
        </div>
     );
}

export default DigCard;