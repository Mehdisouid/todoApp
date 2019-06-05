import {ADDTODO, BASE_URL, DELETETODO, EDITTODO, GETTODOS, SEARCHTODO} from "./const";
import axios from "axios";


export const gettodolist = () => (dispatch) => {
    axios.get(BASE_URL + '/todolist').then(res => {
        return dispatch({type: GETTODOS, payload: res.data})

    })

}

export const deletetodo = (id) => (dispatch) => {
    axios.delete(BASE_URL + '/todolist/' + id).then(res =>
        dispatch({type: DELETETODO, payload: id})
    )

}

export const searchtodo = (e) => (dispatch) => {
    const text = e.target.value
    return dispatch({type: SEARCHTODO, payload: text})


}

export const addtodo = (todo) => (dispatch) => {
    axios.post(BASE_URL + '/todolist', todo).then(dispatch({type: ADDTODO, payload: todo}))


}


export const edittodo = (todo) => (dispatch) => {
    axios.put(BASE_URL + '/todolist/' + todo.id, todo).then(dispatch({type: EDITTODO, payload: todo}))


}