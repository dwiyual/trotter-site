import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as Yup from "yup";



const formSchema = Yup.object().shape({
  firstName: Yup.string().required('Must have a first name!'),
  lastName: Yup.string().required('Must have a last name!'),
  email: Yup.string().email('must be valid email!'),
  adress: Yup.string(),
  birthDate: Yup.date().required('birth date required!'),
  phoneNumber: Yup.number().max(10, 'Phone number is too long!')
});

const FormWrapper = styled.form`
display: block;

height: 20rem;
margin: 1rem;
`

function Application() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    adress: '',
    birthDate: '',
    phoneNumber: ''
  };

  const [form, setform] = useState(initialState)

  //const [state, dispatch] = useReducer(initialState, formReducer);


  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    adress: '',
    birthDate: '',
    phoneNumber: ''

  });

  const [disabled, setDisabled] = useState(true);


  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    Yup
      .reach(formSchema, fieldName)
      .validate(fieldValue)
      .then(valid => {
        setErrors({
          ...errors, [fieldName]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors, [fieldName]: err.errors[0]
        });
      });
  
    setform({ ...form, [fieldName]: fieldValue });  
    console.log(form)
  };



  const handleSubmit = (e) => {
    e.preventDefualt();
    alert("Your application has been sent!");
    setform({ [e.target.name]: '' });
    console.log(form);
  }
  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(form).then(valid => {
      setDisabled(valid);
    });
  }, [form]);

  return (
    <>
      <h2>Apply Today</h2>
      <FormWrapper>
        <label className="apply-label">
          First Name
          <input onChange={handleChange} />
        </label>
        {errors.firstName.length > 0 && <p className="error">{errors.firstName}</p>}
        <label className="apply-label">
          Last Name
          <input onChange={handleChange} />
        </label>
        {errors.lastName.length > 0 && <p className="error">{errors.lastName}</p>}
        <br />
        <label className="apply-label">
          Adress
          <input onChange={handleChange} type="text" name="adress" value={form.adress} />
        </label>
        {errors.adress.length > 0 && <p className="error">{errors.adress}</p>}
        <label className="apply-label" >
          Email
          <input onChange={handleChange} />
        </label>
        {errors.email.length > 0 && <p className="error">{errors.email}</p>}
        <label>
          Date of Birth
          <input onChange={handleChange} type="date" name="birthDate" value={form.birthDate} />
        </label>
        <br />
        <label className="apply-label">
          Phone Number
          <input onChange={handleChange} type="tel" name="phoneNumber" value={form.phoneNumber} />
        </label>
        <button  type="submit" disabled={disabled} onSubmit={handleSubmit} >Submit</button>
      </FormWrapper>
    </>
  );
}



export default Application