import React, {useState, useEffect} from 'react'
import Axios from 'axios';

const FatchingDataUseState = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(err => {
            setLoading(false)
            setPost({})
            setError('Somthing is Wrong' + err)
        })
    }, [])

    return (
        <div>
            <h1>FatchingDataUseState</h1>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FatchingDataUseState
