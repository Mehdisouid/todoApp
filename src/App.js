import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoHome from "./redux/TodoHome";
import Navbar from "./Navbar";
import {ToastContainer ,toast} from "react-toastify";

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <TodoHome/>
            <ToastContainer  position={toast.POSITION.BOTTOM_RIGHT} />
        </Provider>
    );
}


export default (App);
