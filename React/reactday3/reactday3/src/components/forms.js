import React, {Component} from 'react';

class Forms extends Component {


    onKeyUp = (passed, e) => {
        if(e.keyCode ===13 ){
            console.log(passed)
            switch (passed){
                case 'firstName':
                    this.lastName.focus();
                    break;
                case 'lastName':
                    this.age.focus();
                    break;
                case 'age':
                    this.submit.focus();
                    break;
                default: 
                    this.submit.focus();

            }
        }
    }


    onSubmit =() => {
        alert(`yey submitted! ${this.firstName.value}, ${this.lastName.value} `);

    }
    render() {
        return (
            <div className="App">
                <div>
                    <span> first name </span>
                    <input 
                        type="text"
                        onKeyUp={this.onKeyUp.bind(this, "firstName")}
                        ref={(input) => { this.firstName = input;} }/>
                </div>

                <div>
                    <span> Last name: </span>
                    <input  
                        type="text"
                        onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                        ref={(input) => { this.lastName = input; }} />
                </div>

                <div>
                    <span> Age: </span>
                    <input
                        type="text"
                        onKeyUp={this.onKeyUp.bind(this, 'age')}
                        ref={(input) => { this.age = input; }} />
                </div>

                <div>
                    <input
                        type="submit"
                        value="submit"
                        onClick={this.onSubmit}
                        ref={(input)=> {this.submit = input;} }
                        />
                </div>

        </div>
        )
    }
}


export default Forms;