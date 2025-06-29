import { useEffect, useState } from "react";
const lessons = [
    {
        id: 1,
        name: 'React là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    },
]
const Content = () => {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = (e) => {
            console.log(e);
        }
        window.addEventListener('lesson-1',handleComment)
        return () => window.removeEventListener('lesson-1',handleComment)
    },[]);
    return (
        <>
         <ul>
            {lessons.map(lesson => (
                <li
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? 'red' : '#333'
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >{lesson.name}</li>
            ))}
         </ul>
        </>
    );
};

export default Content;