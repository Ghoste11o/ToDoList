import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ItodoTask, updateTasks } from "../Redux/taskSlice";


const CompTasks = () => {
  const data = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();
  const filteredData = data.filter(el => el.isDone === true);

  const handleClick = (id: number | string) => {
    const newData = data.map((task: ItodoTask) => {
      if (task.id === id) {
        return { ...task, isDone: false };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newData));
    dispatch(updateTasks(newData));
  };

  const handleClickDelete = (id: number | string) => {
    const newData = data.filter((task: ItodoTask) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newData));
    dispatch(updateTasks(newData));
  };

  return (
    <>
      {filteredData.map((el) => (
        <li key={el.id} className="h-28 border-2 border-lime-500 p-2 flex justify-between">
          <p className="flex flex-col w-4/5">
            <span className="grow text-wrap truncate mb-2">{el.text}</span>
            <span className="flex-none text-xs">Date created:{el.date}</span>
            <span className="flex-none text-xs">Time created:{el.time}</span>
          </p>
          <div className="flex flex-col justify-between">
            <button onClick={() => handleClick(el.id)} type="button" className="border-2 border-orange-500 bg-orange-300 hover:bg-orange-500 uppercase text-xs p-2">Cancel</button>
            <button onClick={() => handleClickDelete(el.id)} type="button" className="border-2 border-orange-500 bg-orange-300 hover:bg-orange-500 uppercase text-xs p-2">Delete</button>
          </div>
        </li>
      ))}
    </>
  )
};

export default CompTasks;