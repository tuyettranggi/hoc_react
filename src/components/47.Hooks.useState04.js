import { useState } from 'react'

const HooksUseState04 = () => {
    const [info, setInfo] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'Ha Noi, VN'
    });

    const handleUpdate = () => {
        setInfo({
            ...info,
            bio: 'Yêu màu hồng ^^'
        });
    }
    return (
        <article className="wrapper">
            <h2>{JSON.stringify(info)}</h2>
            <button className="reset" onClick={handleUpdate}>Update</button>
        </article>
    );
};

export default HooksUseState04;