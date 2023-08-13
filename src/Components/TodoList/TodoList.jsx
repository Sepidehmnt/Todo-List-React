import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
const TodoList = ({ data, setState }) => {
  const onChangeCompleted = (index) => {
    let newList = [...data];
    newList[index].isCompleted = !newList[index].isCompleted;
    setState(newList);
  };
  let onDeleteTodo = (index) => {
    let newInfoList = [...data];
    newInfoList.splice(index, 1);
    setState(() => newInfoList);
  };
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {data.map((item, index) => (
            <div className={`todo ${item.isCompleted && "completed"}`}>
              <li className="todo-item">{item.title}</li>
              <button
                className="complete-btn"
                onClick={() => onChangeCompleted(index)}
              >
                {item.isCompleted ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </button>
              <button className="trash-btn" onClick={() => onDeleteTodo(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
