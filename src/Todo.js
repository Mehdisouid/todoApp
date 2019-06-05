import React, {Component, Fragment, StyleSheet} from 'react';

class Todo extends Component {


    render() {
        const {todo ,itemClick } = this.props
        return (
            <Fragment>
                <div style={styles.todo} onClick={itemClick}>

                    <h1 style={styles.todoitem}>{todo.name}</h1>
                    <p style={styles.todoitem}>{`${todo.duration} hours `}</p>
                    <button onClick={()=>this.props.deletetodo(todo.id)} style={styles.todoitem} color={'red'}>X</button>
                </div>
            </Fragment>

        );
    }
}

const styles = {
    todo: {
        marginBottom:10 ,
        textAlign: 'center' ,

    },
    todoitem:{

        display: 'inline-block',
        marginRight: 20

    }
}

export default Todo;