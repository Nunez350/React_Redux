import React, { Component } from 'react';
import * as actionCreators from '../actions/index'
import { connect } from 'react-redux';

class NewPost extends Component {
    constructor(props){
        super(props)
        this.title = React.createRef(); 
        this.message = React.createRef(); 
    }   

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.title.current.value;
        const message = this.message.current.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }     
        this.title.current.value ='';
        this.message.current.value = '';
        //console.log(actionCreators.addPost(data))
        this.props.onAddPost(data)

    }

    render () {
        return (           
                <div className = "post-container">
                    <h1  className="post_heading"> Create Post</h1>
                    <form className= "form" onSubmit={this.handleSubmit}>
                        <input 
                            required type="text" 
                            ref={this.title}
                            placeholder="Enter Post Title"/>
                        <br/>
                        <br/>
                        <textarea required rows="5" 
                            ref={this.message}
                            cols="28"
                            placeholder="Enter Post"/>
                            <br/>
                            <br/>
                            <button> Post</button>
                    </form>
                </div>    
        );
    }
}


const mapStateToProps = state => {
    return {       
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {     
        onAddPost: (data) => dispatch(actionCreators.addPost(data)),     
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);

