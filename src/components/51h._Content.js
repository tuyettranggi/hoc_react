import { useState } from "react";

const Content = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>
            {isShow &&(<h2>Đây là Component đã được mounted</h2>)}
        </>
    );
};

export default Content;