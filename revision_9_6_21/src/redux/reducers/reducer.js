const initialState = {
    gname: '',
    mcount: 0
}
import CreateScreen from "../../screens/CreateScreen";

export default function appReducer(state=initialState, action) {
    switch (action.type) {
        case 'addName': {
            return {
                ...state,
                gname: [
                    ...state.gname,
                    {
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        }
        case 'toggle' : {
            return {
                ...state,
                gname: state.gname.map(gname => {
                    if (gname.id !== action.payload) {
                        return gname
                    }
                    return {
                        ...gname,
                        completed: !gname.completed
                    }
                })
            }
        }
        default:
            return state
    }
}




// import {actionType} from "../actions/actionType";
// import {fromJS} from "immutable";
//
// function initialState(){
//     return fromJS(
//         {
//             showCamera: false,
//             profilePhoto: require('../../assets/logo.png')
//         }
//     )
// }
//
// export default function reducer(state=initialState(), action) {
//     if(typeof reducer.prototype[action.type] === 'function'){
//         return reducer.prototype[action.type](state, action)
//     }
//     else {
//         return state;
//     }
// }
//
// reducer.prototype[actionType.ui.showCamera] = (state,action) => {
//     return state.set('showCamera', action.payload)
// }
//
// reducer.prototype[actionType.ui.setProfilePhoto] = (state, action) => {
//     return state.set('setProfilePhoto', action.payload)
// }
