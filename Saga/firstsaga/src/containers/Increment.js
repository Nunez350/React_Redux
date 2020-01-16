import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class Increment extends Component {
    constructor(props){
        super(props)
        this.counterRef= React.createRef(); 
     
    }  


    handleSubmit = (e) => {
        e.preventDefault();
        const counterRef = this.counterRef.current.value;
        const data = {
            id: new Date(),
            item: count
        }     
        this.todoItem.current.value ='';
        this.props.onAddTodo(data)
        // console.log(data)

    }


    render() {
        return(
            <div className = "post-container">
                    <h1  className="post_heading"> Add To Do</h1>
                    <form className= "form" onSubmit={this.handleSubmit}>
                        <input 
                            required type="text" 
                            ref={this.todoItem}
                            placeholder="Enter To Do Item"/>
                        <br/>
                        <br/>
                        <button> Post</button>
                    </form>


                    <ul>
                        {console.log(this.props.state)}
                        {this.props.state.todos.map(strResult => {
                                // console.log(strResult)
                            return <li key={strResult.id} 
                           >{strResult.item}</li>
                        })}

                    
                    </ul>
                </div>   
        )
    }
}






const mapStateToProps = state => {
    return {       
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {     
        onAddTodo: (data) => dispatch(actionCreators.addTodo(data)),     
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);



import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class TodoAdd extends Component {
    constructor(props){
        super(props)
        this.todoItem= React.createRef(); 
     
    }  


    handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = this.todoItem.current.value;
        const data = {
            id: new Date(),
            item: todoItem
        }     
        this.todoItem.current.value ='';
        this.props.onAddTodo(data)
        // console.log(data)

    }


    render() {
        return(
            <div className = "post-container">
                    <h1  className="post_heading"> Add To Do</h1>
                    <form className= "form" onSubmit={this.handleSubmit}>
                        <input 
                            required type="text" 
                            ref={this.todoItem}
                            placeholder="Enter To Do Item"/>
                        <br/>
                        <br/>
                        <button> Post</button>
                    </form>


                    <ul>
                        {console.log(this.props.state)}
                        {this.props.state.todos.map(strResult => {
                                // console.log(strResult)
                            return <li key={strResult.id} 
                           >{strResult.item}</li>
                        })}

                    
                    </ul>
                </div>   
        )
    }
}






const mapStateToProps = state => {
    return {       
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {     
        onAddTodo: (data) => dispatch(actionCreators.addTodo(data)),     
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);


