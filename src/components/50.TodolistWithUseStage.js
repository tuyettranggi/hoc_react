import { useState } from "react";
const Ul = ({jobs, setJobs, job, setJob}) => {
    const handleDel = (key) => {
        setJobs(prev => {
            let newJobs = jobs.filter((_, index) => index !== key);
            let jsonJobs = JSON.stringify(newJobs);
            console.log(jsonJobs);
            localStorage.setItem('jobs',jsonJobs);
            return newJobs;
        });
    }
    return (
        <ul>
            {
                jobs.map((job, index) => (
                <li key={index}>{job} <button onClick={()=>handleDel(index)}>❌</button></li>
                ))
            }
        </ul>
    );
}

const TodolistWithUseStage = () => {
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs;
    });
    
    const [inputJob, setInputJob] = useState('');
    const handleAdd = () => {
        setJobs(prev => {
            let newJobs = [...prev, inputJob];
            let jsonJobs = JSON.stringify(newJobs);
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
            
            <Ul jobs={jobs} setJobs={setJobs} />
        </article>
    );
};

export default TodolistWithUseStage;