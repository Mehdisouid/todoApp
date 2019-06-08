import React, {Component} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DownCount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            started: false,
            seconde: 2,
            minute: props.minute,
            hour: props.hour,
            listner: null
        }
    }

    runtimer = () => {
        this.setState({listner: setInterval(this.counter, 1000), started: true})
    }

    counter = () => {
        const {hour, minute, seconde, started} = this.state
        if (started) {
            this.setState({seconde: seconde == 0 ? 59 : seconde - 1})

            this.setState({minute: seconde == 0 ? (minute == 0 ? 59 : minute - 1) : minute})

            this.setState({hour: (minute == 0 && seconde == 0) ? hour - 1 : hour})
        }

        if (started && hour == 0 && seconde == 0 && minute == 0) {
            this.setState({hour: 0, seconde: 0, minute: 0, started: false, listner: null})
            toast("down count was ended !")
        }

    }

    stopTimer = () => {
        this.setState({...this.state, started: false, listner: clearInterval(this.state.listner)})

    }


    render() {

        const {hour, minute, seconde} = this.state

        return (
            <div style={{display: 'inline-block'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <button className={'btn'} onClick={this.runtimer}>start</button>
                    </div>
                    <div>
                        <button className={'btn'} onClick={this.stopTimer}>pause</button>
                    </div>
                    <h1>{hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:{seconde < 10 ? `0${seconde}` : seconde}</h1>

                </div>
            </div>
        );
    }
}

export default DownCount;