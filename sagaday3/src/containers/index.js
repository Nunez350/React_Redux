import React, { Component} from 'react';
import Race from '../../components/Race'
import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props)
        console.log(this)
        }


        render() {
            const {v1,v2, msg, status, ...actions} = this.props;
            return ( 
                <div>
                    <Race v1={v1} v2={v2}  msg={msg} status={status} actions={actions}/>
                </div>
            )

        }
    }


    function mapStateToProp(state, ownProps){
        return {
            v1: state.default.v1,
            v2: state.default.v2,
            msg: state.default.msg,
            status: state.default.status
        }
    }

  export default App;