import { useEffect, useState } from "react";

const Content = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        //Cleanup
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    });

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        // file là 1 object vì vậy có thể thêm 1 property cho nó
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <article className="wrapper">
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </article>
    );
};

export default Content;