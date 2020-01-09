import React from 'react';

import { Formik, Field , Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

let SignupForm = () => {
    return (
        <Formik 
        initialValues={{ firstName: '', lastName: '', email:''}}
        validationSchema={Yup.object({
            firstName: Yup.string()
            .min(3, "Must be minimum 3 charaters")
            .max(15, "mst be 15 charaters or less")
            .required('Required'),
            
            lastName: Yup.string()
            .max(20, 'Must be 20 hcractees or less')
            .required('Required'),
            
            email: Yup.string()
            .email("Imvalied email address")
            .required('Required'),
        })}

        OnSubmit ={( values, {setSubmitting }) => {
        setTimeout(()=> {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        >
            <Form className="myform">
                <label htmlFor="firstName"> First name</label>
                <Field className="field" name="firstName" type="text"/>
                <ErrorMessage className="err" name="firstName"/>
                
                <label htmlFor="lastName"> Last name</label>
                <Field className="field" name="lastName" type="text"/>
                <ErrorMessage className="err" name="lastName"/>
                
                <label htmlFor="email">  email</label>
                <Field className="field" name="email" type="text"/>
                <ErrorMessage className="err" name="email"/>

                <Field name="color"  as="select" placeholder="Favorite color">
                    <option value="red"> Red</option>
                    <option value="green"> Green </option>
                    <option value="blue"> blue</option>
                </Field>
                <button type ="submit"> Submit </button>
            

            </Form>
        </Formik>
    )
}

export default SignupForm;