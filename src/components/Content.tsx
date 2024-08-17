import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../Redux/taskSlice";
import Tasks from "./Tasks";
import CompTasks from "./CompTasks";

const Main = () => {
  const [localInput, setLocalInput] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (el: React.ChangeEvent<HTMLInputElement>) => setLocalInput(el.target.value);

  const submitByEnter = (el: React.KeyboardEvent<HTMLInputElement>) => {
    if (el.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    if (localInput.trim() !== "") {
      dispatch(addNewTask({
        text: localInput,
        date: `${day}.${month}.${year}`,
        time: `${hours}:${minutes}:${seconds}`,
      }));
      setLocalInput("");
    };
  };
  
  return (
    <div className="main pb-6">
      <div className="createTask flex justify-center gap-5 pb-4">
        <button 
          onClick={handleClick} 
          type="button" 
          className="font-medium border-2 w-40 border-orange-500 bg-orange-300 hover:bg-orange-500 uppercase">
          Create
        </button>
        <input 
          value={localInput}
          onChange={handleInputChange}
          onKeyDown={submitByEnter} 
          className="w-1/2 p-2 border-2 border-orange-500 bg-orange-300 outline-none" 
          type="text" 
          placeholder="Enter new task..."/>
      </div>
      <div className="tasks grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-center pb-4 font-medium">
            Tasks in progress:
          </h2>
          <ul className="flex flex-col gap-1">
            <Tasks />
          </ul>
        </div>
        <div>
          <h2 className="text-center pb-4 font-medium">
            Completed tasks:
          </h2>
          <ul className="flex flex-col gap-1">
            <CompTasks />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Main;