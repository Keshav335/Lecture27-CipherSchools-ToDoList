import { useContext, useState } from "react";
import { formateDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";
const Task = ({ task: { title, description, createdDate, taskId } }) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({ title: title, description: description });

  let hadleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (isEditing) {
    return (
      <div className="card">
        <div className="content">
          <div className="ui form">
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
            <div className="description">
              <label>Description</label>
              <input
                type="text"
                spellCheck={false}
                data-ms-editor={true}
                placeholder="Task Description"
                name="description"
                onChange={hadleInputChange}
                value={task.description}
              />
            </div>
          </div>
          <div className="meta">{formateDate(createdDate)}</div>
          {/* <div className="description">{description}</div> */}
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => {
                editTask({ ...task, createdDate, taskId });
                setIsEditing(false);
              }}
            >
              Save
            </div>
            <div
              className="ui basic red button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{formateDate(createdDate)}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </div>
            <div
              className="ui basic red button"
              onClick={() => deleteTask(taskId)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Task;
