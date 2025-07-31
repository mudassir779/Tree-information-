import { createSlice } from "@reduxjs/toolkit";


const prodRoute = createSlice({
    name: "prod",
    initialState: {
        link: "http://localhost:8000",
        // `${import.meta.env.VITE_Backend_BaseUrl}`
    },

    
})

export default prodRoute.reducer

