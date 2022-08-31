import React, {useState} from 'react';
import ShowTodoapp from './ShowTodoapp';

import './Todoapp.css'
function Todoapp() {
    const [task, setTask]= useState("Add Task")
    const [data, setData] = useState([])

    const onchangeHandler =(e)=>{
        setTask(e.target.value)
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        const newData = task;
        setData([...data,newData])

        setTask('')
        
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((cuEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-row">
                <div className="col shadow min-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col p-2">
                            <h4 className="text-center">Todo App</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onchangeHandler}/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add Todo</button>
                        </div>

                    </form>

                    {data.map((value, index) => {
                            return <ShowTodoapp
                                key={index}
                                id={index}
                                task={value}
                                onSelect={deleteItem}
                            />
                    })
                    }


                </div>
            </div>
        </div>
    )
}

export default Todoapp;