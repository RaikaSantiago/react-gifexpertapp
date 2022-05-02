import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFechGif = (cat) => {

    const api_key = 'ZqdBtA6o671XIWO7XtJh0WIEnfhkvt7d';
    const limit = 4;
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(api_key,cat,limit).then(imgs => {
            setState({
                data:imgs,
                loading: false
            });
        })
        //eslint-disable-next-line
    },[cat])
   

    
    return state;
}
