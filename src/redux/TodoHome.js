import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from "../Todo";
import {deletetodo, gettodolist} from "./DataActions";
import RightModal from "../RightModal";

function mapStateToProps(state) {
    const {searchText, todolist} = state.data
    console.log(searchText);
    return {
        todolist: todolist.filter(todo => todo.name.startsWith(searchText))
    };
}


class TodoHome extends Component {

    componentDidMount() {
        this.props.gettodolist()
    }

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            selectedtodo: {name: "hi", duration: 2}
        }
    }

    handleitemCLick =   (todo) => {

          this.setState({openModal: true, selectedtodo: todo})
     }


    render() {
        const {todolist, deletetodo} = this.props
        const {selectedtodo ,openModal} =this.state
        console.log(selectedtodo);
        return (

            <div>
                {todolist.map(todo => (<Todo itemClick={() => this.handleitemCLick(todo)} todo={todo} key={todo.id}
                                             deletetodo={deletetodo}/>))}
                <RightModal selectedtodo={selectedtodo} modalClick={() => this.setState({openModal: false})}
                            openModal={openModal}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, {deletetodo, gettodolist}
)(TodoHome);