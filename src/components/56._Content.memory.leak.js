import { useState, useEffect } from "react";

const Content = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    //Ngoài ra, với fetch, hãy dùng AbortController để hủy request khi unmount:
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => {
            setPosts(post);
        });
    },[]);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     fetch(url, { signal: controller.signal })
    //         .then(r => r.json())
    //         .then(setPosts)
    //         .catch(() => {/* bị hủy */ });

    //     return () => controller.abort();
    // }, []);
    // Như vậy bạn sẽ tránh cả hai loại leak: event listener và network request.

    const [showGoToTop, setShowGoToTop] = useState(false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
                //console.log('set state');
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
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
            {showGoToTop && <button onClick={handleClick} id="scrollToTopBtn" title="Lên đầu trang">↑</button>}
        </>
    );
};

export default Content;