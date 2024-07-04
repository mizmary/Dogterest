import { Dog } from '../../models';
import './Card.css'
import LikeBtn from './LikeBTN/LikeBTN';
import MediaFile from './MediaFile/MediaFile';

interface CardProps {
  dog: Dog;
}

export default function Card(props: CardProps){
    return(
      <div className="media-card">
        <MediaFile url={props.dog.url_text}/>
        {/* <img src={props.dog.url_text} className='media-item' alt='doggy'></img> */}
        <LikeBtn />
      </div>
    )
  }