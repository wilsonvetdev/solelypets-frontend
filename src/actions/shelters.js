export const setShelterInfo = (shelterInfo) => {
    return {
        type: 'SET_SHELTER_INFO',
        payload: shelterInfo
    }
}

export const updateShelterInfo = (shelterInfo) => {
    return {
        type: 'UPDATE_SHELTER_INFO',
        payload: shelterInfo
    }
}

export const addAnimal = (animalInfo) => {
    return {
        type: 'ADD_ANIMAL',
        payload: animalInfo
    }
}

export const deleteAnimal = (animalInfo) => {
    return {
        type: 'DELETE_ANIMAL',
        payload: animalInfo
    }
}

export const updateAnimal = (animalInfo) => {
    return {
        type: 'UPDATE_ANIMAL',
        payload: animalInfo
    }
}

export const updateAnimalImg = (imgInfo) => {
    return {
        type: 'UPDATE_ANIMAL_IMG',
        payload: imgInfo
    }
}

export const updateImg = (imgInfo) => {
    return {
        type: 'UPDATE_SHELTER_IMG',
        payload: imgInfo
    }
}
