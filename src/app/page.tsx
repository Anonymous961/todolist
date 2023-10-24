"use client"
import React, { useState , useEffect} from "react";
import {ethers} from 'ethers';
import { provider, wallet, todoListContract } from "../../ethers";
import { todoListAbi } from "./abi";
import Header from "./Components/header";

export default function Home() {
  const contractAddress = '0x0A49Be76eA39Db32d9024115537E0cc5C1F31BB8'; // Replace with your contract address
  const todoListContract = new ethers.Contract(contractAddress, todoListAbi.abi, wallet);

  const [tasks,setTasks]=useState([
    {id:0,content:"task1",completed:false},
    {id:1,content:"task2",completed:false},
    {id:2,content:"task3",completed:false}
  ]);

  const [task,setTask]=useState("");

  const addTask=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let id=tasks.length;
    setTasks([...tasks,{id:id,content:task,completed:false}]);
    setTask("");
    console.log(tasks);
  }

  const removeTask=(taskId:number)=>{
    const newTasks=tasks.filter((task)=>task.id!==taskId);
    setTasks(newTasks);
    console.log(tasks);
  }

  const toggleComp=(taskId:number)=>{
    const updatedTasks=tasks.map((task)=>{
      if(task.id==taskId){
        return {...task,completed:!task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <main className="flex-row justify-center items-center text-center m-10 ">
      <Header/>
      <form onSubmit={addTask}>
          <input className="text-black p-2 rounded-md m-2" type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
          <input className="bg-emerald-300 text-black p-2 rounded-md" type="submit" value="Add task" />
        </form>
      <div className="text-2xl flex justify-center m-10">
        <div>
        {tasks.map((task,index)=>{
          return(
            <div key={index} className=" w-96 bg-teal-500 flex justify-around p-3 rounded-md m-2">
              <input type="checkbox" value={task.content} onChange={()=>{
                toggleComp(task.id);
                console.log(task);
                }} />
              <span className={task.completed?'line-through text-black':'font-normal text-stone-200'}>{task.content}</span>
              <button className="text-sm bg-blue-400 hover:bg-red-500 border-2 rounded-md p-1" onClick={()=>removeTask(task.id)}>delete</button>
            </div>
          )
        })}
          </div>
      </div>
        
    </main>
  )
}
