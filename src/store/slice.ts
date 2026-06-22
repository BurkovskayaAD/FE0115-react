import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: {
        students: [{id: 1, name: "Ilya"},{id: 2, name: "Slava"}],
        check: true
    },
    reducers: {
        setFalse(state: any) {
            state.check = false;
        },
        addStudent(state: any, {payload}: {payload: any}){
            console.log(state);
            console.log(payload);
            state.students.push(payload)
        }
    }
})

const {actions, reducer} = slice;
export const {setFalse, addStudent} = actions;
export default reducer;