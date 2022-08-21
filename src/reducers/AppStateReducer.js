

const initialState = {

    mylist: [],
    openInfoBook:{},
    popupOpen:false,
    listOpen:false

}

let newState

export const AppStateReducer=(state=initialState, action)=>{
    switch(action.type){
        // add object to array of objects
        case 'ADDINGBOOK':
            var newlist = [...state.mylist, action.payload ]
            newState = Object.assign({},state, {mylist:newlist})
            return newState;
            break
        // remove object from array of objects
        case 'REMOVINGBOOK':
            var newlist = state.filter((i)=>i.id !== action.payload.book.id)
            newState = Object.assign({},state, {mylist:newlist})
            return newState;
            break
        case 'OPENINGINFOBOOK':
            newState = Object.assign({},state, {popupOpen:true})
            return newState
             break
        case 'CLOSEINFOBOOK':
            newState = Object.assign({},state, {popupOpen:false})
            return newState
             break
        case 'OPENMYLIST':
            newState = Object.assign({},state, {listOpen:true})
            return newState
            break
        case 'CLOSEMYLIST':
            newState = Object.assign({},state, {listOpen:false})
            return newState
                break
         default:
            return state
            break
    }

}