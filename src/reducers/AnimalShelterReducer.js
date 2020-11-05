let initialState = {
    animalShelters: [],
}

const animalShelterReducer = (state = initialState, action) => {
    let foundShelter = state.animalShelters.find(shelter => shelter.id === action.payload.animal_shelter.id)
    let foundShelterIndex = state.animalShelters.findIndex(shelter => shelter.id === foundShelter.id)
    let copyOfShelters = state.animalShelters
    switch (action.type) {
        case 'SET_ANIMAL_SHELTERS':
            return {
                ...state,
                animalShelters: [ ...state.animalShelters, ...action.payload ]
            }
        case 'ADD_ANIMAL':
            let copyOfAnimals = [ ...foundShelter.animals, {
                id: action.payload.id,
                capitalized_name: action.payload.capitalized_name,
                capitalized_species: action.payload.capitalized_species,
                description: action.payload.description
            }]
            foundShelter.animals = copyOfAnimals
            copyOfShelters[foundShelterIndex] = foundShelter
            return {
                ...state,
                animalShelters: [ ...copyOfShelters ]
            }
        case 'DELETE_ANIMAL':
            let filteredAnimals = foundShelter.animals.filter(animal => {
                return animal.id !== action.payload.id
            })
            let copyOfShelter = { ...foundShelter, animals: filteredAnimals }
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