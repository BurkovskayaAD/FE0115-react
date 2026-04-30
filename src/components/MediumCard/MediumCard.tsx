import './MediumCard.css';
import Shrek from  '../../assets/shrek.jpg'

function MediumCard() {
    return ( 
        <div className='medium-card'>
                    <div className='medium-card-top'>
                        <div className='medium-card-top-right'>
                            <div className='medium-card-top-right-image'>
                                <img src={Shrek} alt="Img" />
                            </div>
                        </div>
                        <div className='medium-card-top-left'>
                            <div className='medium-card-top-left__title'>qui est esse</div>
                            <div className='medium-card-top-left__body'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla</div>
                        </div>
                    </div>
                    <div className='medium-card-bottom'>
                        <div className='medium-card-bottom-left'></div>
                        <div className='medium-card-bottom-right'></div>
                    </div>
                </div>
     );
}

export default MediumCard;