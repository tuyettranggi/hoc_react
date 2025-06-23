import { useState } from "react";

const Content = () => {
    return <h2>Mounted & Unmounted?</h2>;
}

const MountedAndUnmounted = () => {
    const [show, setShow] = useState(false);

    return (
        <article className="wrapper">
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            {show && <Content />}
        </article>
    );
};

export default MountedAndUnmounted;