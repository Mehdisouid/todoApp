import React, {Component, Fragment} from 'react';
import   './modal.css'
class Modal extends Component {
    render() {
        const{close ,addtodo ,openModal}= this.props
        return (

                <div className="modal" style={{transform :openModal?'translateY(0vh)' : 'translateY(-100vh)' , opacity :openModal?'1':'0'}}>
                    <div className="modal-header">
                        <h1 className="header-txt">add new to do</h1>
                        <button className="close-btn btn" onClick={close}>X</button>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button className="add_btn  btn" onClick={addtodo}>Add</button>
                        <button className="cancel_btn btn" onClick={close} >cancel</button>

                    </div>
                </div>

        );
    }
}

export default Modal;