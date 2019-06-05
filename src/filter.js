import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchtodo} from "./redux/DataActions";

function mapStateToProps(state) {
    return {};
}



class Filter extends Component {

    render() {
        const {searchtodo}=this.props
        return (
            <div style={style.filter}>
                <input style={style.input} onChange={searchtodo} type="text"  />
            </div>
        );
    }
}
const style ={
    filter :{
         textAlign:'center',
        height :40

    },
    input :{
        height: '100%'

    }
}

export default connect(
    mapStateToProps,{searchtodo}
)(Filter);