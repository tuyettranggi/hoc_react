import Content from "./56._Content.memory.leak";
import { useState } from "react";

const HookUseEffectCleanFunc = () => {    
    const [isShow, setIsShow] = useState(false);
    return (
        <article className="wrapper" style={{marginTop: 200}}>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
            {isShow && (<Content />)}
        </article>
    );
};

export default HookUseEffectCleanFunc;