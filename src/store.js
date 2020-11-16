import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo,deleteToDo);
console.log(addToDo.type,deleteToDo.type);
console.log(addToDo(),deleteToDo());

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = text => {
//     return {
//         type: ADD,
//         text
//     }
// }

// const deleteToDo = id => {
//     return {
//         type: DELETE,
//         id
//     }
// }

// const reducer = (state = [{text: 'special',id:Date.now()}], action) => {
const reducer = (state = [], action) => {
    switch (action.type){
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

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}
export default store;