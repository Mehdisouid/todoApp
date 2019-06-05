import React from 'react';
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import Todo from "./Todo";
import TodoHome from "./redux/TodoHome";
import Navbar from "./Navbar";

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <TodoHome/>
        </Provider>
    );
}


export default (App);
