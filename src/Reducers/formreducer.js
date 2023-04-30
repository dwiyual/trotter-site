import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
    BirthDate: '',
    PhoneNumber: '',
}

export const FormReducer = createSlice({
    name: 'form',
    initialState: { ...initialState },
    reducers: {
        setFirstName: (state, action) => {
            state.FirstName = action.payload;
        },
        setLastName: (state, action) => {
            state.LastName = action.payload;
        },
        setEmail: (state, action) => {
            state.Email = action.payload;
        },
        setAddress: (state, action) => {
            state.Address = action.payload;
        },
        setBirthDate: (state, action) => {
            state.BirthDate = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.PhoneNumber = action.payload;
        }

    }
})
export const { setFirstName, setLastName, setEmail, setAddress, setBirthDate, setPhoneNumber } = FormReducer.actions;

export default FormReducer

