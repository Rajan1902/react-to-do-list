import React, {useEffect, useState} from 'react';
import Task from './Task.jsx';
function Home() {
    const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const submitHandler = (e) =>{
    e.preventDefault();
    setTasks([...tasks,{title,description}]);
    setTitle("");
    setDescription("");
  };
    const deleteTask = (index) =>{
    const filteredArray = tasks.filter((value, i) => {
     return i !== index;
    });
    setTasks(filteredArray);
  };
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  return (
    <>
    <nav>Now you don't have to remember your tasks, all you have to do is finish them!</nav>
    <div className='container'>
        <h1>Your goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>
                setTitle(e.target.value)
            } />
            <textarea placeholder='description' value={description} onChange={(e)=>
                setDescription(e.target.value)
            } ></textarea>

            <button type="submit" onClick={submitHandler}>ADD</button>
        </form>
        {tasks.map((item, index)=>(
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
        )

        )}
      
    </div>
    </>
  );
}

export default Home;