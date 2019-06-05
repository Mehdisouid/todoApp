import React, {Component} from 'react';
import {connect} from "react-redux";
import {edittodo} from "./redux/DataActions";

class RightModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            duration: ''
        }

        console.log(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            name: nextProps.selectedtodo.name,
            duration: nextProps.selectedtodo.duration,
            id: nextProps.selectedtodo.id
        })
    }

    handleTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    editSubmit = (e) => {
        e.preventDefault()
        const {name, duration, id} = this.state
        const {edittodo} = this.props

        edittodo({name, duration, id})

    }

    render() {
        const {openModal, modalClick} = this.props
        const {name, duration} = this.state
        const add_form = <form>
            <div className={"input-item"}>
                <label> add new todo</label>
                <input value={name} name={'name'} className={"input"} type={'text'} onChange={this.handleTextChange}/>
            </div>
            <div className={"input-item"}>
                <label> enter duration</label>
                <input value={duration} name={'duration'} className={"input"} type={'number'}
                       onChange={this.handleTextChange}/>
            </div>

            <button className={'btn'} onClick={this.editSubmit}>edit</button>
        </form>

        return (
            <div style={{
                ...style.right_modal,
                transform: openModal ? 'translateX(50vh)' : 'translateX(200vh)',
                opacity: openModal ? '1' : '0'
            }}>
                <button className="close-btn btn" style={{float: 'left'}} onClick={modalClick}>X</button>

                {add_form}
            </div>
        );
    }
}

const style = {
    right_modal: {
        position: 'fixed',
        right: 0,
        width: '50%',
        height: '100%',
        top: 0,
        textAlign: 'left',
        backgroundColor: 'white',
        border: '1px solid black',
        boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17)',
        transition: 'all 1s'

    }
}


export default connect(null, {edittodo})(RightModal);