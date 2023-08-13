import { useState } from "react";
import TodoEdit from "../TodoEdit/TodoEdit";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <TodoEdit data={data} setData={setData} />
      <TodoList data={data} setState={setData} />
    </>
  );
};

export default Todo;
