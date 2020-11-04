let initialState = {
    isShelter: false,
    first_name: '',
    customer_id: '',
    token: '',
    email: '',
    donated_to: [],
    paid_donations_count: 0,
    total_donations_amount: 0,
    comments: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                first_name: action.payload.user.first_name,
                customer_id: action.payload.user.customer_id,
                token: action.payload.token,
                email: action.payload.user.email,
                donated_to: action.payload.user.donated_to,
                paid_donations_count: action.payload.user.paid_donations_count,
                total_donations_amount: action.payload.user.total_donations_amount,
                comments: action.payload.user.comments
            }
        default:
            return state
    }
}

export default userReducer