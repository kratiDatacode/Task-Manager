import {createSlice} from "@reduxjs/toolkit";

 const taskSlice =createSlice({
    name:'tasks',
    initialState :{
        items : [],
        filters:'all'
    },
    reducers:{
        addTask:{

        },
        toggleTask:{

        },
        deleteTask:{

        },
        setFilter:{
            
        }
    }
 })