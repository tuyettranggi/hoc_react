import { useReducer, useRef } from "react"
import reducer, { initState } from "./reducer"
import { setJob, addJob, deleteJob } from "./actions"
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch
const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {job, jobs} = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob('')); //Sau khi input thì làm cho thẻ input trống lại
        
        inputRef.current.focus();
    }
    return (
        <article className="wrapper">
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    //e.target.value
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default TodoApp;