import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionCreators from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/index';
import Button from '@material-ui/core/Button';
// or


// import * as resultActionCreators from '../../store/actions/result';
// import * as counterActionCreator  from '../../store/actions/counter';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter( 'dec' )}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter( 'add', 10 )}  />
                <CounterControl label="Subtract 8" clicked={() => this.props.onSubtractCounter( 'sub', 8 )}  />
                <hr/>
                <Button color= 'secondary' onClick={this.props.onStoreResult.bind(this,this.props.ctr)}> Store results </Button>
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

// const onDeleteResult =  (strResult.val) = {
//     return {
// ...state.results
//     }
// }

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(8)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id),console.log(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
