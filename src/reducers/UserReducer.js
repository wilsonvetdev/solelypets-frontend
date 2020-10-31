let initialStateOfUserReducer = {
    email: '',
    token: '',
    donations: ''
}

const userReducer = (state = initialStateOfUserReducer, action) => {
    switch (action.type) {
        // case 'ADD_DONATION':
        //   break
        default:
            return state
    }
}

export default userReducer