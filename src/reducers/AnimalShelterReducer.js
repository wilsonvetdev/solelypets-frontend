let initialState = {
    animalShelters: [],
}

const animalShelterReducer = (state = initialState, action) => {
    let foundShelter;
    let foundShelterIndex;
    let copyOfShelters; 
    let copyOfShelter;
    switch (action.type) {
        case 'SET_ANIMAL_SHELTERS':
            return {
                ...state,
                animalShelters: [ ...state.animalShelters, ...action.payload ]
            }
        case 'ADD_ANIMAL_SHELTER':

            let newAnimalShelter = {
                id: action.payload.user.id,
                first_name: action.payload.user.first_name,
                last_name: action.payload.user.last_name,
                name: action.payload.user.name,
                email: action.payload.user.email,
                full_address: action.payload.user.full_address,
                donations_received: action.payload.user.donations_received,
                animals: action.payload.user.donations_received
            } 
            
            return {
                ...state,
                animalShelters: [ ...state.animalShelters, newAnimalShelter]
            }
        case 'ADD_ANIMAL':
            foundShelter = state.animalShelters.find(shelter => shelter.id === action.payload.animal_shelter.id)
            foundShelterIndex = state.animalShelters.findIndex(shelter => shelter.id === foundShelter.id)
            copyOfShelters = state.animalShelters
            let copyOfAnimals = [ ...foundShelter.animals, {
                id: action.payload.id,
                capitalized_name: action.payload.capitalized_name,
                capitalized_species: action.payload.capitalized_species,
                description: action.payload.description
            }]
            copyOfShelter = { ...foundShelter, animals: copyOfAnimals}
            copyOfShelters[foundShelterIndex] = copyOfShelter
            return {
                ...state,
                animalShelters: [ ...copyOfShelters ]
            }
        case 'DELETE_ANIMAL':
            foundShelter = state.animalShelters.find(shelter => shelter.id === action.payload.animal_shelter.id)
            foundShelterIndex = state.animalShelters.findIndex(shelter => shelter.id === foundShelter.id)
            copyOfShelters = state.animalShelters
            let filteredAnimals = foundShelter.animals.filter(animal => {
                return animal.id !== action.payload.id
            })
            copyOfShelter = { ...foundShelter, animals: filteredAnimals }
            copyOfShelters[foundShelterIndex] = copyOfShelter
            return {
                ...state,
                animalShelters: [ ...copyOfShelters ]
            }
        case 'UPDATE_ANIMAL':
            foundShelter = state.animalShelters.find(shelter => shelter.id === action.payload.animal_shelter.id)
            foundShelterIndex = state.animalShelters.findIndex(shelter => shelter.id === foundShelter.id)
            copyOfShelters = state.animalShelters
            let updatedAnimals = foundShelter.animals.map(animal => {
                if(animal.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        capitalized_name: action.payload.capitalized_name,
                        capitalized_species: action.payload.capitalized_species,
                        description: action.payload.description
                    }
                } else {
                    return animal
                }
            })
            copyOfShelter = { ...foundShelter, animals: updatedAnimals}
            copyOfShelters[foundShelterIndex] = copyOfShelter
            return {
                ...state,
                animalShelters: [ ...copyOfShelters ]
            }
        default:
            return state
    }
}

export default animalShelterReducer