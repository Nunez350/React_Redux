import React, {Component} from 'react';
//import Forms from './components/forms';
//import FormValidate from './components/formValidate';
import DynamicList2 from './components/dynamiclist2';

class App extends Component {
      constructor(props){
        super(props);
        this.inputField = React.createRef();
        this.state = {
        uppercase: false };
      }
     

      toggleInputCase = () => {  
        const isUpper = this.state.uppercase; 
        // const value = this.inputField.value;
        const value = this.inputField.current.value;


        this.inputField.current.value = 
        isUpper
        ? value.toLowerCase()
         : value.toUpperCase();
        this.setState({ uppercase: !isUpper });

      }
      render() {  

        return (
          // <div>
          //   {/* <input type= "text" ref={elem => this.inputField = elem}/> */}
          //   <input type= "text" ref={this.inputField}/>
          //   <button type="button" 
          //   onClick={this.toggleInputCase.bind(this)}>
          //     toggle case
          //   </button>
          // </div>
//          <Forms/>
          // <FormValidate/>
          <DynamicList2/>
        )
      }
}


export default App;






// import React, {Component} from 'react';


// class App extends Component {
//       constructor(props){
//         super(props);
//         this.state = {
//         uppercase: false };
//       }
     

//       toggleInputCase = () => {  
//         const isUpper = this.state.uppercase; 
//         const value = this.refs.inputField.value;
//         this.refs.inputField.value = isUpper ? value.toLowerCase() : value.toUpperCase();
//         this.setState({ uppercase: !isUpper });

//       }
//       render() {  
//         return (
//           <div>
//             <input type= "text" ref="inputField"/>

//             <button type="button" 
//             onClick={this.toggleInputCase.bind(this)}>
//               toggle case
//             </button>
//           </div>
//         )
//       }
// }


// export default App;
