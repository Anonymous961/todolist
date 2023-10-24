"use client"
import React, { useState, useEffect } from "react";
import { todoListContract } from "../../ethers";
import Header from "./Components/header";

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]); 
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const taskCount = await todoListContract.taskCount();
  
        console.log(taskCount);

    
        const taskList = [];
        for (let id = 1; id <= taskCount; id++) {
          const [taskId, content, completed] = await todoListContract.getTask(id);
          if(content==""){
            continue;
          }
          taskList.push({ id: taskId, content, completed });
        }
    
        setTasks(taskList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [task.length]);

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await todoListContract.createTask(task);

      setTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const removeTask = async (taskId: number) => {
    try {
      await todoListContract.deleteTask(taskId);

      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  const toggleComp = async (taskId: number) => {
    try{
      await todoListContract.updateTask(taskId);

      const updatedTask= tasks.map((task)=>{
        if(task.id===taskId){
          return {...task,completed:!task.completed};
        }
        return task;
      });
      setTasks(updatedTask);
    }catch(error){
      console.error("Error toggling task:",error);
    }
  };

  return (
    <main className="flex-row justify-center items-center text-center m-10 ">
      <Header />
      <form onSubmit={addTask}>
        <input
          className="text-black p-2 rounded-md m-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="bg-emerald-300 text-black p-2 rounded-md"
          type="submit"
          value="Add task"
        />
      </form>
      <div className="text-2xl flex justify-center m-10">
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="w-96 bg-teal-500 flex justify-around p-3 rounded-md m-2">
              <input
                type="checkbox"
                value={task.content}
                onChange={() => toggleComp(task.id)}
              />
              <span className={task.completed ? "line-through text-black" : "font-normal text-stone-200"}>
                {task.content}
              </span>
              <button
                className="text-sm bg-blue-400 hover-bg-red-500 border-2 rounded-md p-1"
                onClick={() => removeTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
