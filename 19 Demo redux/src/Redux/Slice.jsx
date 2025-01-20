import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
   name:"myData",
   initialState:{
     value:['Chiku','Piku','Miku','Tiku','Chiki','Piki','Miki','Tiki']
   },
   reducers:{
    addUserName:(state,action)=>{
        var name = action.payload;
        state.value = [...state.value,name];
    },
    removeUserName:(state,action)=>{
        var name = action.payload;
        state.value = state.value.filter(nm=>nm != name);
    },
   }
})
export const{addUserName,removeUserName} = slice.actions;
export default slice.reducer;