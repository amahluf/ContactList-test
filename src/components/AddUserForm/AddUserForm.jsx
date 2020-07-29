import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Button } from "react-bootstrap";
import ErrorMessageText from "./ErrorMessageText";





const initialValues={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zip: ''
      },
    description: ''
   };

const validationSchema = Yup.object({
    id: Yup.string().required('Введите ID'),
    firstName: Yup.string().required('Введите имя'),
    lastName: Yup.string().required('Введите фамилию'),
    email: Yup.string().required('Введите email'),
    phone: Yup.string().required('Введите номер телефона'),
})

const AddUserForm = ({addNewUser,setAddUsersBlock,addUserBlock}) => {

  return (
    <Formik  validationSchema={validationSchema} onSubmit={(values)=>addNewUser(values)} initialValues={initialValues}>
      {formik => {  
        return(
      <Form > 
        <div className="add-user-form" style={addUserBlock ? { display: 'flex' } : { display: 'none' } }>

          <div className="add-user-form_row">
            <div className="form-controller">
                <label htmlFor="id">ID</label>
                <Field  type="text" id="id" name="id" />
                <ErrorMessage name="id" component={ErrorMessageText}/>
            </div>

            <div className="form-controller">
                <label htmlFor="firstName">Name</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component={ErrorMessageText}/>
            </div>
          </div>
          <div className="add-user-form_row">
            <div className="form-controller">
                <label htmlFor="lastName">Last name</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component={ErrorMessageText}/>
            </div>

            <div className="form-controller">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage  name="email" component={ErrorMessageText}/>
            </div> 
          </div>
          
            <div className="form-controller phone">
                <label htmlFor="phone">Phone</label>
                <Field type="text" id="phone" name="phone"/>
                <ErrorMessage name="phone" component={ErrorMessageText}/>
            </div>

          <Button  variant="success" type="submit" className="add-user-form__form-add-btn" 
            disabled={!formik.isValid || formik.isSubmitting} >
            ДОБАВИТЬ В ТАБЛИЦУ
          </Button>

          <Button type='reset' variant="danger" className="add-user-form__form-hide-btn" 
            onClick={()=>setAddUsersBlock(false)}>
            Close
          </Button> 
        </div>
      </Form>
  )
      }}
    </Formik>
  );
};
export default AddUserForm;
