export const addingBook = (book) =>{
    return {
        type: 'ADDINGBOOK',
        payload: book
    }
}

export const removeBook = (book) =>{
    return {
        type: 'REMOVINGBOOK',
        payload: book
    }
}

export const openInfoBook = (book) =>{
    return {
        type: 'OPENINGINFOBOOK',
        payload: book
    }
}
export const closeInfoBook = (book) =>{
    return {
        type: 'CLOSEINFOBOOK',
        payload: book
    }
}

// WE DONT NEED PAYLOAD HERE
export const openMyList = () =>{
    return {
        type: 'OPENMYLIST',
    }
}

export const closeMyList = () =>{
    return {
        type: 'CLOSEMYLIST',
    }
}