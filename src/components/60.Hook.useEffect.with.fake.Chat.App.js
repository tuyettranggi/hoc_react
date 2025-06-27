import Content from "./60._Content";
import { useState } from "react";

const UseEffectWithChatApp = () => {
    const [show, setShow] = useState(false);
    
    return (
        <article className="wrapper">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </article>
    );
};

export default UseEffectWithChatApp;