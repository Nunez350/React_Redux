import React, { Component } from 'react';
import axios from '../../../axios';
import './NewPost.css';
import Input from '../../../components/Input/Input'


class NewPost extends Component {
    state = {
        postForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Post Title'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Post Body',
                    rows: 6
                },
                value: '',
               
                validation:{
                    required: true,
                    minLength: 20
                },
                valid: false,
                touched: false
            },
            author: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value:'john', displayValue:'John'},
                        {value:'max', displayValue:'Max'}
                    ]
                },
                value: '',
           
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    postDataHandler = (event) => {
        event.preventDefault();
        console.log("form submit");
        const postData = {};
        for(let formElementIdentifier in this.state.postForm){
            postData[formElementIdentifier] = this.state.postForm[formElementIdentifier].value;

        }
        console.log(postData);
        axios.post('/posts', postData)
            .then((response) => {
                console.log(response);
            })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedPostForm = {
            ...this.state.postForm
        }
        const updatedFormElement = {
            ...updatedPostForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        
        updatedFormElement.touched = true;
        updatedPostForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({postForm: updatedPostForm});

    }

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== "" && isValid;  
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;  
        }

        return isValid;
    }
    render() {
        let formElementsArray = [];
        for(let key in this.state.postForm){
            formElementsArray.push({
                id:key,
                config: this.state.postForm[key]
            })
        }
        return (
            <form onSubmit={this.postDataHandler} className="NewPost">
                <h1>Add a Post</h1>
                {
                    formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementtype={formElement.config.elementType}
                            elementconfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event,formElement.id )}/>
                    ))
                }
                <button type='submit'>Add Post</button>
            </form>
        );
    }
}

export default NewPost;