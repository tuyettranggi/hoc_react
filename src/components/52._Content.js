import { useState, useEffect } from "react";

const Content = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    //.1️⃣.useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // ------------------------------------------
    // useEffect(() => {
    //     console.log('Mounted');
    // });
    // ------------------------------------------
    //.Ví dụ: trường hợp này ↓↓↓
    // sẽ làm cho lặp lại fetch rất nhiều có thể treo máy.
    // ------------------------------------------
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(post => {
    //         setPosts(post);
    //     });
    // });
    //.2️⃣.useEffect(callback,[])
    // - Chỉ gọi callback 1 lần sau khi component mounted
    // ------------------------------------------
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => {
            setPosts(post);
        });
    },[]);

    return (
        <>
            <div>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
        </>
    );
};

export default Content;