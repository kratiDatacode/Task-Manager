import { useState } from "react"
 
const AddTask = ()=>{

   const [text,setText]=useState("");
   const handleSubmit =()=>{}

    return(
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Add a Task"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTask