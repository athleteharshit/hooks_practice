import Axios from 'axios';
import { useState, useEffect} from 'react';

const DataFetching = () => {

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleButtonClick = () => {
        setIdFromButtonClick(id);
    }

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [idFromButtonClick]);
    // console.log(posts);

    return (
        <>
            <h1>List</h1>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={handleButtonClick}>Fetch Data</button>
            <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </>
    )
}

export default DataFetching;