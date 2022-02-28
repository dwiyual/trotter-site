const formReducer = (state, action)=> {
    {        switch (action.type) {
            case "SET_FIRSTNAME":
                return{...state, firstName: action.payload};
            case "SET_LASTNAME":
                return{...state, lastName: action.payload};
            case "SET_EMAIL":
                return{...state, email: action.payload};
            case "SET_ADRESS":
                return {...state, adress: action.payload};
            case "SET_BIRTHDATE":
                return {...state, birthDate: action.payload};
            case "SET_PHONENUMBER":
                return {...state, phoneNumber: action.payload};
        }
    }
}