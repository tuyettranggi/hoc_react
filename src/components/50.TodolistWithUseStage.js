import { useState } from "react";

const TodolistWithUseStage = () => {

    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs;
    });
    
    const [inputJob, setInputJob] = useState('');
    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, inputJob];
            const jsonJobs = JSON.stringify(newJobs);
            console.log(jsonJobs);
            localStorage.setItem('jobs',jsonJobs);
            return newJobs;
        });
    }
    return (
        <article className="wrapper">
            <input
                value={inputJob}
                onChange={e => setInputJob(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            {/*Kết quả*/}
            <ul>
                {
                   jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                   ))
                }
            </ul>
        </article>
    );
};

export default TodolistWithUseStage;