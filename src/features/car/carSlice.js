import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    cars: ["Model S"," Model 3" , "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars; 

// export 