import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'

export function useGifs ({keyword} = {keyword: null}){
    const [value, updateValue] = useState([])
    useEffect(function(){

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

       getGifs({keyword: keywordToUse}).then(value => {
        updateValue(value)
        localStorage.setItem('lastKeyword', keyword)
       })
    }, [keyword])

    return {value}
}
