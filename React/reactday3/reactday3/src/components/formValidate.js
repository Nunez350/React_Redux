import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = { errors: [] };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const errors = this.handleValidation(username, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  };
  handleValidation = (username, password) => {
    const errors = [];
    console.log(username);
    console.log(password);
    if(username.length === 0) {
      console.log("blank");
      errors.push("Username can't be blank");
    } else {console.log("no problem!");}
    if(password.length < 6 ) {
      console.log("Too small");
      errors.push("Password must be six characters long");
    } else {console.log("no problem!");}
    return errors;
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>React Ref Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input type="text" ref={this.username}/>
          </div>
          <div>
            <label>Password: </label>
            <input type="text" ref={this.password}/>
          </div>
          <div>
            <button>Submit</button>
          </div>
          {errors.map(error => <p key={error}>{error}</p>)}
        </form>
      </div>
    );
  }
}
export default App;


