import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoEdit = ({ data, setData }) => {
  const [title, setTitle] = useState("");
  function addToDo(event) {
    event.preventDefault();
    setData(() => {
      const temp = [...data];
      temp.push({
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      });
      return temp;
    });
    setTitle(() => "");
  }
  function onChangeInput(event) {
    setTitle(() => event.target.value);
  }
  function onChangeSelect(event) {
    let item = event.target.value;
    let temp = [...data];
    switch (item) {
      case "all":
        const result1 = temp.sort((item1, item2) => item1.title - item2.title);
        setData(result1);
        break;

      case "completed":
        const result2 = temp.sort(
          (item1, item2) => item2.isCompleted - item1.isCompleted
        );
        setData(result2);
        break;
      case "incompleted":
        const result3 = temp.sort(
          (item1, item2) => item1.isCompleted - item2.isCompleted
        );
        setData(result3);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <form action="" id="form">
        <input
          type="text"
          className="todo-input"
          onChange={onChangeInput}
          value={title}
        />
        <button className="todo-button" type="submit" onClick={addToDo}>
          <FontAwesomeIcon icon={faPlus} className="fa-plus" />
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={onChangeSelect}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default TodoEdit;
