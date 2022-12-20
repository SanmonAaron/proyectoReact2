import React from 'react';
import Gif from './Gif'
import {useGifs} from '../hooks/useGifs'
export default function ListOfGifs ({params}){
    const {keyword} = params
    const {value} = useGifs({keyword})
    return <div>
        {
            value.map(singleValue =>
                <Gif
                key={singleValue.id}
                title={singleValue.title} 
                url={singleValue.url} 
                id={singleValue.id} />
              )
        }
    </div>
}