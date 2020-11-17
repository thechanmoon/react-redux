// import {createStore} from "redux";
// import {createAction, createReducer, configureStore} from "@reduxjs/toolkit";
import {configureStore, createSlice} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// console.log(addToDo,deleteToDo);
// console.log(addToDo.type,deleteToDo.type);
// console.log(addToDo(),deleteToDo());

/* const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state = [{text: 'special',id:Date.now()}], action) => {

const reducer = (state = [], action) => {
    switch (action.type){
        // case ADD:
        //     return [{ text: action.text, id: Date.now() }, ...state];
        // case DELETE:
        //     return state.filter(toDo => toDo.id !== action.id);
        case addToDo.type:
            console.log(action);
            return [{text: action.payload , id:Date.now()},...state];
        case deleteToDo.type:
            console.log(action);
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  }); */


// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         console.log("state : ",state);
//         console.log("action : ",action);
//         state.push({text: action.payload, id: Date.now()})
//     },
//     [deleteToDo]: (state, action) => {
//         console.log("state : ",state);
//         console.log("action : ",action);
//         return state.filter(toDo => toDo.id !== action.payload)
//     }
// });

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers:{
        add: (state, action) => {state.push({text: action.payload, id: Date.now()})},
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

console.log(toDos);
console.log(toDos.actions);

// const store = createStore(reducer);
const store = configureStore({reducer: toDos.reducer});

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// }
export const { add, remove } = toDos.actions;
export default store;