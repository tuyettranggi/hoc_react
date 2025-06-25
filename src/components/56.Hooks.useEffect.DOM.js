import { useEffect, useState } from "react";
const HookUseEffectDom = () => {
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
            {showGoToTop && <button onClick={handleClick} id="scrollToTopBtn" title="Lên đầu trang">↑</button>}
        </>
    );
};

export default HookUseEffectDom;


//setShowGoToTop(window.scrollY >= 200);
// Tương đương ↓↓↓
// if (window.scrollY >= 200) {
//     setShowGoToTop(true);
// } else {
//     setShowGoToTop(false);
// }