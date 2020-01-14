import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';

class PostEditor extends Component {

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> */}
              
                <hr/>
                <button onClick={this.props.onStoreResult.bind(this,this.props.ctr)}> Store results </button>
                     <ul>
                            {this.props.storedResults.map(strResult => {
                                // console.log(strResult)
                            return <li key={strResult.id} 
                            onClick={this.props.onDeleteResult.bind(this,strResult.id )}>{strResult.val}</li>
                        })}

                    
                    </ul>
            </div>

       
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
   
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id),console.log(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);





// const onDeleteResult =  (strResult.val) = {
//     return {
// ...state.results
//     }
// }

// import * as actionCreators from '../../store/actions/index';
// import Button from '@material-ui/core/Button';
// or


// import * as resultActionCreators from '../../store/actions/result';
// import * as counterActionCreator  from '../../store/actions/counter';

// import CounterControl from '../../components/CounterControl/CounterControl';
// import CounterOutput from '../../components/CounterOutput/CounterOutput';