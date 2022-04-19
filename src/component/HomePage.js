import React from 'react'
import { useNavigate } from "react-router-dom";
import'./Homepage.scss'

function HomePage() {
    const navigate = useNavigate()
  return (
    <div className="containerr">
        <div>
        <div>
            <h1 className='headin1'>welcome</h1>
            <h2 className='headin2'>wanna make Todo list</h2>
        </div>
        <button onClick={()=> navigate("/todo")} className="btnn">Add todo</button>
        </div>
    </div>
  )
}

export default HomePage