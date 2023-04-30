import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, setEmail, setAddress, setBirthDate, setPhoneNumber } from "../Reducers/formreducer";


const formSchema = Yup.object().shape({
  FirstName: Yup.string().required('Must have a first name!'),
  LastName: Yup.string().required('Must have a last name!'),
  Email: Yup.string().email('must be valid email!'),
  Address: Yup.string().required('must have an address!'),
  BirthDate: Yup.date().required('birth date required!'),
  PhoneNumber: Yup.number().min(9, 'number is too short')
});

const FormWrapper = styled.form`
display: block;

height: 20rem;
margin: 1rem;
`

const initialState = {
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
    BirthDate: '',
    PhoneNumber: '',
}



export function Application() {
  const FirstName = useSelector((state) => state.FirstName);
  const LastName = useSelector((state) => state.LastName);
  const Email = useSelector((state) => state.Email);
  const Address = useSelector((state) => state.Address);
  const BirthDate = useSelector((state) => state.BirthDate);
  const PhoneNumber = useSelector((state) => state.PhoneNumber);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    switch (fieldName) {
      case 'FirstName':
        dispatch(setFirstName(fieldValue));
        break;
      case 'LastName':
        dispatch(setLastName(fieldValue));
        break;
      case 'Email':
        dispatch(setEmail(fieldValue));
        break;
      case 'Address':
        dispatch(setAddress(fieldValue));
        break;
      case 'BirthDate':
        dispatch(setBirthDate(fieldValue));
        break;
      case 'PhoneNumber':
        dispatch(setPhoneNumber(fieldValue));
        break;
      default:
        break;
    }

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

    setForm({ ...form, [fieldName]: fieldValue });
    console.log(form)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been sent!");
    setForm(initialState);
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form]);

  return (
    <>
      <h2>Apply Today</h2>
      <FormWrapper>
        <label className="apply-label">
          First Name
          <input onChange={handleChange} name="FirstName" value={FirstName} />
          {errors.FirstName && <p className="error">{errors.FirstName}</p>}
        </label>
        <label className="apply-label">
          Last Name
          <input onChange={handleChange} name="LastName" value={LastName} />

          {errors.LastName.length > 0 && <p className="error">{errors.LastName}</p>}
        </label>
        <br />
        <label className="apply-label">
          Adress
          <input onChange={handleChange} type="text" name="Address" value={Address} />

          {errors.Address.length > 0 && <p className="error">{errors.Address}</p>}
        </label>
        <br />
        <label className="apply-label" type="text" name="email" value={Email}>
          Email
          <input onChange={handleChange} />

          {errors.Email.length > 0 && <p className="error">{errors.Email}</p>}
        </label>
        <br />
        <label className="apply-label">
          Date of Birth
          <input onChange={handleChange} type="date" name="BirthDate" value={BirthDate} />
          {errors.BirthDate.length > 0 && <p className="error">{errors.BirthDate}</p>}
        </label>
        <br />
        <label className="apply-label">
          Phone Number
          <input onChange={handleChange} type="tel" name="PhoneNumber" value={PhoneNumber} />
        </label>
        {errors.PhoneNumber.length > 0 && <p className="error">{errors.PhoneNumber}</p>}
        <button type="submit" disabled={disabled} onSubmit={handleSubmit} >Submit</button>
      </FormWrapper>
    </>

  );
}




export default Application