import Content from "./52._Content";
import { useEffect,useState } from "react";

const HookUseEffect = () => {    
    const [isShow, setIsShow] = useState(false);
    return (
        <article className="wrapper">
            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
            {isShow && (<Content />)}
        </article>
    );
};

export default HookUseEffect;