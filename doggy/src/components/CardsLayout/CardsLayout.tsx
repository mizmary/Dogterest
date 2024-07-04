/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
import Masonry from 'react-masonry-css';
import { Dog } from '../../models';
import Card from '../Card/Card';

interface CardsLayoutProps{
    dogs: Dog[];
}

export default function CardsLayout(props: CardsLayoutProps){
    const dogs = props.dogs;

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return(
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid-column'
        >
        { dogs.map( (dog) => ( <Card dog = {dog} key={dog.id}/> ))}
        </Masonry>

    )
    
}