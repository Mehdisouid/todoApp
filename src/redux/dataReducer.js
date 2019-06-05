import {ADDTODO, DELETETODO, EDITTODO, GETTODOS, SEARCHTODO} from "./const";

const initialState = {

    searchText: '',
    todolist: []

}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETETODO :
            return {...state, todolist: state.todolist.filter(todo => todo.id !== action.payload)}
        case SEARCHTODO:

            return {...state, searchText: action.payload}


        case ADDTODO :
            return {...state, todolist: [...state.todolist, {...action.payload, id: state.todolist.length}]}
        case GETTODOS :
            return {...state, todolist: action.payload}

        case EDITTODO :
            const newarray = state.todolist.filter(todo=>todo.id!==action.payload.id)
            return {...state ,todolist :[...newarray,action.payload]}
    }
    return state

}
export default dataReducer