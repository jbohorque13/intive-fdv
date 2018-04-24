
import { ADD_USER, CHANGE_USER, DELETE_USER } from "../constants/ActionTypes";
const initialUserState = {
    users:[]
}

export default function reducer(state = initialUserState, action) {

  switch (action.type) {
    case ADD_USER:
        return Object.assign({}, state, {
            users: [
                ...state.users,
                {
                    name:action.user.name,
                    surname:action.user.surname,
                    country:action.user.country,
                    birth:action.user.birth,
                },
            ]
        })    
        //state.users.push(action.user)
        /* return {
            ...state,
            users: [...state.users, action.user],
        }; */

    case CHANGE_USER:
        return {
            
        };
    case DELETE_USER:
        return state = action.payload;
}

return state;
}
