import React, {useContext} from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif'

export default function Detail({params}) {
    const {value} = useContext(GifsContext)
    const value1 = value.find(singleValue => singleValue.id === params.id)
    return <Gif {...value1} />
}