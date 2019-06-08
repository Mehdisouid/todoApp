import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from "./filter";
import Modal from "./Modal";
import {addtodo} from "./redux/DataActions";


class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            name: '',
            duration: {
                minute: 0,
                hour: 0
            }
        }
    }

    handleModal = (ok) => {
        this.setState({openModal: ok})

    }
    handleTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleDurationChange = (e) => {
        this.setState({duration: {...this.state.duration,[e.target.name]: e.target.value}});
    }


    render() {
        const {openModal, name, duration:{hour , minute}} = this.state

        const {addtodo} = this.props
        const add_form = <form>
            <div className={"input-item"}>
                <label> add new todo</label>
                <input value={name} name={'name'} className={"input"} type={'text'} onChange={this.handleTextChange}/>
            </div>
            <div className={"input-item"}>
                <label> enter duration</label>
                <p>Hours </p>
                <input  value={ hour} name={'hour'} className={"input"} type={'number'}
                       onChange={this.handleDurationChange}/>

                <p>minutes</p>
                <input   value={minute} name={'minute'} className={"input"} type={'number'}
                       onChange={this.handleDurationChange}/>

            </div>

        </form>
        return (
            <nav>

                <ul>
                    <li><Filter/></li>
                    {openModal && <div className="wrapper" onClick={() => this.handleModal(false)}/>}

                    <li><a onClick={() => this.handleModal(true)}>Add</a></li>
                    <Modal openModal={openModal} addtodo={() => addtodo({name, duration :{hour , minute} })}
                           close={() => this.handleModal(false)}>{add_form}</Modal>
                </ul>


            </nav>

        );
    }
}

export default connect(
    null, {addtodo}
)(Navbar);