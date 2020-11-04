let initialState = {
    first_name: '',
    last_name: '', 
    name: '', 
    email: '',
    address: '',
    city: '',
    token: '',
    animals: []
}

const shelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHELTER_INFO':
            // {user: {…}, token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJyb2xlIjoiQ…lciJ9.qZtTGs1mgMwrxmdiLNItwk0QSi11tQ-JYA9a9BIfkvo", role: "AnimalShelter"}
            // role: "AnimalShelter"
            // token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJyb2xlIjoiQW5pbWFsU2hlbHRlciJ9.qZtTGs1mgMwrxmdiLNItwk0QSi11tQ-JYA9a9BIfkvo"
            // user:
            // address: "321 street"
            // city: "Brooklyn"
            // email: "carol@email.com"
            // first_name: "Carol "
            // last_name: "Baskin"
            // name: "Tiger Sanctuary"
            // state: "New York"
            return {
                ...state,
                first_name: action.payload.user.first_name,
                last_name: action.payload.user.last_name, 
                name: action.payload.user.name, 
                email: action.payload.user.email, 
                address: action.payload.user.address, 
                city: action.payload.user.city,
                state: action.payload.user.state,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default shelterReducer