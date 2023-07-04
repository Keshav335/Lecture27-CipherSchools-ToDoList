import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { Navigate, useNavigate } from "react-router-dom";

const AddTask = () => {
    const {addNewTask}=useContext(TaskContext);
    const navigate =useNavigate(); 

    const [task, setTask] = useState({
        title: " ",
        description: "",
    })
    let hadleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }
    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        setTask({});
        navigate("/");

    }
    return (

        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Task Title"
                            name="title"
                            onChange={hadleInputChange}
                            value={task.title}
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea
                            rows="2"
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Task Description"
                            name="description"
                            onChange={hadleInputChange}
                            vlaue={task.description}
                        />
                    </div>
                    <button type="submit" className="ui primary button">
                        Submit
                    </button>
                </form>
            </div>
        </section>

    )
};
export default AddTask;