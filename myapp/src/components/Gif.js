import React from 'react'
import './Gif.css'
export default function Gif({title, id, url}) {
    return (
        <a href={`#${id}`} className="aaron">
            <h4>{id}: {title}</h4>
            <img alt={title} src={url} />
        </a>
    )
}