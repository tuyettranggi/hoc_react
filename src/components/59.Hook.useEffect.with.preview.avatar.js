import Content from "./59._Content";
import { useState } from "react";

const UseEffectWithPreviewAvatar = () => {
    const [show, setShow] = useState(false);
    
    return (
        <article className="wrapper">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </article>
    );
};

export default UseEffectWithPreviewAvatar;