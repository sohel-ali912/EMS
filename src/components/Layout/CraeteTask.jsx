import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CraeteTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskdDate, setTaskdDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
  e.preventDefault();

  if (!userData?.employees) {
    alert("Employee data abhi load nahi hua");
    return;
  }

  const employeeExists = userData.employees.some(
    (employee) =>
      employee.firstName.toLowerCase() === assignTo.trim().toLowerCase()
  );

  if (!employeeExists) {
    alert("Employee nahi mila. Naam check karo.");
    return;
  }

  const task = {
    taskTitle,
    taskDescription,
    taskdDate,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  const employees = userData.employees.map((employee) => {
    if (
      employee.firstName.toLowerCase() !== assignTo.trim().toLowerCase()
    ) {
      return employee;
    }

    return {
      ...employee,
      tasks: [...employee.tasks, task],
      taskNumbers: {
        ...employee.taskNumbers,
        newTask: employee.taskNumbers.newTask + 1,
      },
    };
  });

  setUserData({ ...userData, employees });
  localStorage.setItem("employees", JSON.stringify(employees));

  setTaskTitle("");
  setTaskDescription("");
  setTaskdDate("");
  setAssignTo("");
  setCategory("");
};

  
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-b-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-b-gray-400 mb-4"
              type="date"
              value={taskdDate}
              onChange={(e)=>{
                setTaskdDate(e.target.value)
              }}
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-b-gray-400 mb-4"
              type="text"
              placeholder="employee name"
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
            />
          </div>
          <div className="">
            <h3>Category</h3>
            <input type="text" placeholder="design,dev,  etc"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-b-gray-400 mb-4"
            value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}/>
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-b-gray-400"
            name=""
            id=""
            value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
          ></textarea>
          <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
            create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CraeteTask;
