import { useState } from 'react'
import './LikeBTN.css'

export default function LikeBtn(){
    const [isLiked, setLiked] = useState<boolean>(false)

    const handleLikeClick = (like: boolean) => {
        setLiked(like);
    }

    return(
        <button
        className={`like-btn ${isLiked === true ? 'active' : ''}`}
        onClick={() => handleLikeClick(true)}>
        Лайк!
        </button>
    )
}