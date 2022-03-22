const SET_FIRSTNAME = "SET_FIRSTNAME"

const setFirstname = (e) => {
    console.log(e);
    return {
        type: SET_FIRSTNAME, payload: { firstname: e.target.value }

    }
}

export default setFirstname;