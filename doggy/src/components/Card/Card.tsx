import './Card.css'
import LikeBtn from './LikeBTN/LikeBTN';

interface CardProps {
  link: string;
}

export default function Card(props: CardProps){
    return(
      <div className="media-card">
        <img src={props.link} className='media-item'></img>
        <LikeBtn />
      </div>
    )
  }