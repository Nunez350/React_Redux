import React from 'react';
// import {Formik } from 'formik';
import './App.css';
import SignupForm from './SignupForm/SignupForm';

function App() {
  return (
<SignupForm/>
  )


      
}

export default App;

  // return <Formik 
  //     initialValues={{ name: ''}}
  //     onSubmit={(values, {setSubmitting }) => {
  //     console.log('submitting', values);
  //     setTimeout(()=> {
  //       alert(JSON.stringify(values, null, 2));
  //       setSubmitting(false);
  //     }, 5000);
  //   }}

  //   validate={values => {
  //     let errors ={};
  //     if(!values.name){
  //       errors.name = 'Name is required';
  //     }
  //   }}>
  //     {({ handleSubmit, handleChange, handleBlur, values,errors, touched, isSubmitting}) => (
  //     <form onSubmit={handleSubmit}>
  //       <div>

       
  //       <input 
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //         value={values.name}
  //         name="name"
  //         type="text"
  //         placeholder="Name">
  //         </input>
  //       {
  //         errors.name && touched.name && 
  //         <div style={{ color: "red", fontWeight: "bold"}}> {errors.name}</div>
  //       }
  //        </div>
  //         <button type="submit" disabled={isSubmitting}> Submit</button>
  //         </form>
  //   )}
  //   </Formik>



