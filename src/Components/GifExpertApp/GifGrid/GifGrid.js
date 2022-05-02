import React from 'react';
import './GifGrid.css';
import { GifGridItem } from './GifGridItem/GifGridItem';
import { useFechGif } from '../../../hooks/useFechGif';

export const GifGrid = ({ cat }) => {
    const {data:imgs, loading} = useFechGif(cat);
    
    const getCapitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    const title = getCapitalize(cat);
    return (
        <>
            <h3 className='animate__animated animate__flash'>{title}</h3>
            {loading && <p>'Cargando...'</p>}
            <div className='card-grid'>
                {
                    imgs.map(img => (
                    //    <GifGridItem key={img.id} img={img}/>
                    <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </>
    )
}
