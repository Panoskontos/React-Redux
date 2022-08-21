

const initialState = {

    mylist: [],
    openInfoBook:{},
    popupOpen:false,
    listOpen:false

}

let newState

const AppStateReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADDINGBOOK':
            var newlist = [...state.mylist, action.payload ]
            newState = Object.assign({},state, {mylist:newList})
            break
        case 'REMOVINGBOOK':
            break
        case 'OPENINGINFOBOOK':
             break
        case 'CLOSEINFOBOOK':
             break
        case 'OPENMYLIST':
            break
        case 'CLOSEMYLIST':
                break
         default:
            break
    }

}