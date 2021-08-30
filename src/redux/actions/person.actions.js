export function addPerson(person) {
    return {
        type: 'addPerson',
        payload: person

    }
}

export function removePerson(person) {
    return {
        type: 'removePerson',
        payload: person

    }
}