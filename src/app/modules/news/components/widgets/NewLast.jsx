import React, { useEffect, useState } from 'react'

export default function NewLast(props) {
    const [lastNew, setLastNew] = useState({})
    const [author, setAuthor] = useState({})

    useEffect (()=> {
        setLastNew(props.item)
        setAuthor(props.item.author)
    }, [])

    return (
        <div>
            {lastNew.title}
            {author.first_name}
        </div>
    )
}
