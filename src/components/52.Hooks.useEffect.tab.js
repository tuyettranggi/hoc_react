import { useEffect,useState } from "react";

const HookUseEffectTab = () => {
    const tabs = ['posts','todos', 'albums'];
    const [type, setType] = useState('posts');
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setContents(data);
        });
    },[type]);

    return (
        <article className="wrapper">
            <ul className="tabs">
                {tabs.map(tab => {
                    return (
                        <li 
                            className={type === tab ? "active":""}
                            key={tab}
                            onClick={() => setType(prev => {
                                return tab
                            })}
                        >{tab}</li>
                    );
                })}
            </ul>
            <ul className="tabContent">
                {contents.map(content => {
                    return (
                        <li key={content.id}>{content.title}</li>
                    );
                })}
            </ul>
        </article>
    );
};

export default HookUseEffectTab;