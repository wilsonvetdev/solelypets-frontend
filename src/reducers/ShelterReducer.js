let initialState = {
    isShelter: true,
    first_name: '',
    last_name: '', 
    name: '', 
    email: '',
    full_address: '',
    token: '',
    animals: [],
    role: ''
}

const shelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHELTER_INFO':
            return {
                ...state,
                first_name: action.payload.user.first_name,
                last_name: action.payload.user.last_name, 
                name: action.payload.user.name, 
                email: action.payload.user.email, 
                full_address: action.payload.user.full_address,
                token: action.payload.token,
                role: action.payload.role,
                // animals: action.payload.user.animals
            }
        default:
            return state
    }
}

export default shelterReducer