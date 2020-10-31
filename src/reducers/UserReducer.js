let initialStateOfUserReducer = {
    email: '',
    token: '',
    donations: [],
    comments: []
}

const userReducer = (state = initialStateOfUserReducer, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                email: action.payload.user.email,
                comments: action.payload.user.comments,
                donations: action.payload.user.donations,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default userReducer